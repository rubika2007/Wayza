import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserProfile } from '../types';
import { authService } from '../services/authService';
import { profileService, ProfileUpdatePayload } from '../services/profileService';

interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (fullName: string, email: string, password: string, confirmPassword: string) => Promise<void>;
  logout: () => void;
  updateProfile: (payload: ProfileUpdatePayload) => Promise<UserProfile>;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('wayza_token'));
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('wayza_user');
    return saved ? JSON.parse(saved) : null;
  });
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchProfileAndUser = async () => {
    if (!token) {
      setUser(null);
      setProfile(null);
      setIsLoading(false);
      return;
    }

    try {
      const [currentUser, userProfile] = await Promise.all([
        authService.getMe(),
        profileService.getProfile(),
      ]);
      setUser(currentUser);
      setProfile(userProfile);
      localStorage.setItem('wayza_user', JSON.stringify(currentUser));
    } catch (err) {
      console.error('Failed to validate session:', err);
      // Clean up invalidated session
      localStorage.removeItem('wayza_token');
      localStorage.removeItem('wayza_user');
      setToken(null);
      setUser(null);
      setProfile(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProfileAndUser();

    const handleExpired = () => {
      setToken(null);
      setUser(null);
      setProfile(null);
    };

    window.addEventListener('wayza_auth_expired', handleExpired);
    return () => window.removeEventListener('wayza_auth_expired', handleExpired);
  }, [token]);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const resp = await authService.login(email, password);
      localStorage.setItem('wayza_token', resp.access_token);
      localStorage.setItem('wayza_user', JSON.stringify(resp.user));
      setToken(resp.access_token);
      setUser(resp.user);

      // Load profile
      const prof = await profileService.getProfile();
      setProfile(prof);
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (fullName: string, email: string, password: string, confirmPassword: string) => {
    setIsLoading(true);
    try {
      const resp = await authService.register(fullName, email, password, confirmPassword);
      localStorage.setItem('wayza_token', resp.access_token);
      localStorage.setItem('wayza_user', JSON.stringify(resp.user));
      setToken(resp.access_token);
      setUser(resp.user);

      const prof = await profileService.getProfile();
      setProfile(prof);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('wayza_token');
    localStorage.removeItem('wayza_user');
    setToken(null);
    setUser(null);
    setProfile(null);
  };

  const updateProfile = async (payload: ProfileUpdatePayload): Promise<UserProfile> => {
    const updated = await profileService.updateProfile(payload);
    setProfile(updated);
    if (user && payload.full_name) {
      const updatedUser = { ...user, full_name: payload.full_name, is_profile_complete: updated.is_profile_complete };
      setUser(updatedUser);
      localStorage.setItem('wayza_user', JSON.stringify(updatedUser));
    }
    return updated;
  };

  const refreshProfile = async () => {
    if (token) {
      try {
        const prof = await profileService.getProfile();
        setProfile(prof);
      } catch (e) {
        console.error('Error refreshing profile:', e);
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        token,
        isAuthenticated: !!token && !!user,
        isLoading,
        login,
        register,
        logout,
        updateProfile,
        refreshProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

