import { IAuthResponse } from '@/types/auth'

export const AuthService = {
  register: async (email: string, password: string): Promise<IAuthResponse> => {
    // Mocked response for now
    return { token: 'mockedToken123' }
  },

  login: async (email: string, password: string): Promise<IAuthResponse> => {
    // Mocked response for now
    return { token: 'mockedToken456' }
  }
}
