export interface RegisterDto {
  email: string;
  password?: string;
  fullName: string;
}

export interface LoginDto {
  email: string;
  password?: string;
}

export interface VerifyEmailDto {
  email: string;
  code: string;
}

export interface ForgotPasswordDto {
  email: string;
}

export interface ResetPasswordDto {
  token: string;
  password?: string;
}

export interface User {
  id: string;
  email: string;
  fullName: string;
  provider?: 'local' | 'google' | 'facebook';
  providerId?: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface RegisterResponse {
  message: string;
  userId: string;
}

export interface AuthResponse {
  user: User;
  accessToken?: string;
}
