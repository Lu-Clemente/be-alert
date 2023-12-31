import * as SecureStore from 'expo-secure-store'
import React, { createContext, useContext, useEffect, useState } from 'react'
import {
  IAuthContextProps,
  IAuthContextValue,
  IAuthResponse
} from '@/types/auth'
import { AuthService } from '../services/auth/AuthService'

const AuthContext = createContext<IAuthContextValue | undefined>(undefined)

export const AuthProvider: React.FC<IAuthContextProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const setSecureToken = async (value: string) => {
    await SecureStore.setItemAsync('token', value)
    setToken(value)
  }

  const getSecureToken = async () => {
    const value = await SecureStore.getItemAsync('token')
    if (value) {
      setToken(value)
    }
  }

  const removeSecureToken = async () => {
    await SecureStore.deleteItemAsync('token')
    setToken(null)
  }

  const login = async (email: string, password: string) => {
    setLoading(true)
    setTimeout(async () => {
      try {
        const response: IAuthResponse = await AuthService.login(email, password)
        await setSecureToken(response.token)
      } catch (error) {
        // Handle this error better
        console.log(error)
      } finally {
        setLoading(false)
      }
    }, 1500)
  }

  const logout = async () => {
    try {
      await removeSecureToken()
    } catch (error) {
      // Handle this error better
      console.log(error)
    }
  }

  const register = async (email: string, password: string) => {
    setLoading(true)
    setTimeout(async () => {
      try {
        const response: IAuthResponse = await AuthService.register(
          email,
          password
        )
        await setSecureToken(response.token)
      } catch (error) {
        // Handle this error better
        console.log(error)
      } finally {
        setLoading(false)
      }
    }, 1500)
  }

  // On component mount, try to retrieve token from secure storage
  useEffect(() => {
    getSecureToken()
  }, [])

  return (
    <AuthContext.Provider value={{ token, loading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
