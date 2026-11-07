export interface User {
  id: number;
  email: string;
  full_name: string;
  is_active: boolean;
  is_profile_complete: boolean;
}

export interface UserProfile {
  id: number;
  user_id: number;
  full_name: string;
  email: string;
  dob?: string | null;
  qualification?: string | null;
  degree?: string | null;
  branch?: string | null;
  graduation_year?: number | null;
  location?: string | null;
  career_interests: string[];
  bio?: string | null;
  is_profile_complete: boolean;
}

export interface AuthResponse {
  access_token: string;
  token_type: string;
  user: User;
}

export interface CareerPathway {
  id: string;
  key: 'placement' | 'higher_studies' | 'government_exams';
  title: string;
  short_description: string;
  detailed_description: string;
  target_audience: string;
  features: string[];
  route: string;
  accent_color: 'blue' | 'purple' | 'emerald';
  icon_name: string;
  badge_label: string;
  status: string;
}

