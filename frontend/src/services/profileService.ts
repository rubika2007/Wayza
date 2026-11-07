import { apiRequest } from './api';
import { UserProfile, CareerPathway } from '../types';

export interface ProfileUpdatePayload {
  full_name?: string;
  dob?: string;
  qualification?: string;
  degree?: string;
  branch?: string;
  graduation_year?: number;
  location?: string;
  career_interests?: string[];
  bio?: string;
}

export const profileService = {
  async getProfile(): Promise<UserProfile> {
    return apiRequest<UserProfile>('/profile', {
      method: 'GET',
    });
  },

  async updateProfile(payload: ProfileUpdatePayload): Promise<UserProfile> {
    return apiRequest<UserProfile>('/profile', {
      method: 'PUT',
      data: payload,
    });
  },

  async getPathways(): Promise<CareerPathway[]> {
    return apiRequest<CareerPathway[]>('/pathways', {
      method: 'GET',
    });
  },
};

