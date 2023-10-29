import { AuthResponse } from '@/types/auth';
import axios from 'axios';

const API_BASE_URL = 'http://your-api-url.com'; // Replace with your actual API URL

export const AuthService = {
  register: async (email: string, password: string): Promise<AuthResponse> => {
    // Mocked response for now
    return { token: 'mockedToken123' };
  },
  
  login: async (email: string, password: string): Promise<AuthResponse> => {
    // Mocked response for now
    return { token: 'mockedToken456' };
  },
};
