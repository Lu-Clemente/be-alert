import React, { createContext, useContext, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { AuthService } from "../services/auth/AuthService";
import { AuthContextProps, AuthContextValue, AuthResponse } from "@/types/auth";

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);

  const setSecureToken = async (value: string) => {
    await SecureStore.setItemAsync("token", value);
    setToken(value);
  };

  const getSecureToken = async () => {
    const value = await SecureStore.getItemAsync("token");
    if (value) {
      setToken(value);
    }
  };

  const removeSecureToken = async () => {
    await SecureStore.deleteItemAsync("token");
    setToken(null);
  };

  const login = async (email: string, password: string) => {
    try {
      const response: AuthResponse = await AuthService.login(email, password);
      await setSecureToken(response.token);
    } catch (error) {
      // Handle this error better
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      await removeSecureToken();
    } catch (error) {
        // Handle this error better
      console.log(error);
    }
  };

  const register = async (email: string, password: string) => {
    try {
      const response: AuthResponse = await AuthService.register(
        email,
        password
      );
      await setSecureToken(response.token);
    } catch (error) {
      // Handle this error better
      console.log(error);
    }
  };

  // On component mount, try to retrieve token from secure storage
  React.useEffect(() => {
    getSecureToken();
  }, []);

  return (
    <AuthContext.Provider value={{ token, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
