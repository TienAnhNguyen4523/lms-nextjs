import { apiClient } from '../api-client';
import { AUTH_ENDPOINTS } from '@/constants/api';
import {
  RegisterDto,
  LoginDto,
  VerifyEmailDto,
  ForgotPasswordDto,
  ResetPasswordDto,
  AuthResponse,
  RegisterResponse,
  User
} from '@/types/auth';

export const authApi = {
  register: (dto: RegisterDto) =>
    apiClient.post<RegisterResponse>(AUTH_ENDPOINTS.REGISTER, dto),

  verifyEmail: (dto: VerifyEmailDto) =>
    apiClient.post<{ message: string }>(AUTH_ENDPOINTS.VERIFY_EMAIL, dto),

  resendVerification: (email: string) =>
    apiClient.post<{ message: string }>(AUTH_ENDPOINTS.RESEND_VERIFICATION, { email }),

  forgotPassword: (dto: ForgotPasswordDto) =>
    apiClient.post<{ message: string }>(AUTH_ENDPOINTS.FORGOT_PASSWORD, dto),

  resetPassword: (dto: ResetPasswordDto) =>
    apiClient.post<{ message: string }>(AUTH_ENDPOINTS.RESET_PASSWORD, dto),

  login: (dto: LoginDto) =>
    apiClient.post<AuthResponse>(AUTH_ENDPOINTS.LOGIN, dto),

  refresh: () =>
    apiClient.post<AuthResponse>(AUTH_ENDPOINTS.REFRESH),

  logout: () =>
    apiClient.post<{ message: string }>(AUTH_ENDPOINTS.LOGOUT),

  getProfile: () =>
    apiClient.get<User>(AUTH_ENDPOINTS.PROFILE),

  // Social Login Helpers (Returns URLs to redirect to)
  getGoogleAuthUrl: () => AUTH_ENDPOINTS.GOOGLE,
  getFacebookAuthUrl: () => AUTH_ENDPOINTS.FACEBOOK,
};
