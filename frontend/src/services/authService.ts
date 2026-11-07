import { apiRequest } from './api';
import { AuthResponse, User } from '../types';

export const authService = {
  async register(full_name: string, email: string, password: string, confirm_password: string): Promise<AuthResponse> {
    return apiRequest<AuthResponse>('/auth/register', {
      method: 'POST',
      data: { full_name, email, password, confirm_password },
    });
  },

  async login(email: string, password: string): Promise<AuthResponse> {
    return apiRequest<AuthResponse>('/auth/login', {
      method: 'POST',
      data: { email, password },
    });
  },

  async getMe(): Promise<User> {
    return apiRequest<User>('/auth/me', {
      method: 'GET',
    });
  },
};

