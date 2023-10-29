import { ReactNode } from "react";

export interface AuthResponse {
  token: string;
}

export interface AuthContextProps {
  children: ReactNode;
}

export interface AuthContextValue {
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
}
