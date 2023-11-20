import { ReactNode } from 'react'

export interface IAuthResponse {
  token: string
}

export interface IAuthContextProps {
  children: ReactNode
}

export interface IAuthContextValue {
  token: string | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  register: (email: string, password: string) => Promise<void>
}
