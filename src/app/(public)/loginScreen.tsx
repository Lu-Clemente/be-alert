import React from 'react'
import { ActivityIndicator, View, Text, TouchableOpacity } from 'react-native'
import { useAuth } from '@/contexts/AuthContext'

const LoginScreen = () => {
  const email = 'test@mail.com'
  const passwaord = 'senha123'

  const { login, loading } = useAuth()

  const handleLogin = () => {
    login(email, passwaord)
  }

  return (
    <>
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <ActivityIndicator size="large" color="#6C63FF" />
        </View>
      ) : (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <TouchableOpacity
            onPress={handleLogin}
            style={{
              backgroundColor: '#6c63ff',
              paddingVertical: 6,
              paddingHorizontal: 10,
              marginBottom: 40,
              borderRadius: 6
            }}
          >
            <Text style={{ color: '#fff', fontWeight: '500' }}>Login</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  )
}

export default LoginScreen
