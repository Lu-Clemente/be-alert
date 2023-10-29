import { useRouter } from 'expo-router'
import React from 'react'
import { ActivityIndicator, Button, Text, View } from 'react-native'
import { useAuth } from '@/contexts/AuthContext'

const LoginScreen = () => {
  const router = useRouter()
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
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text>Login Screen</Text>
          <Button
            title="Go to Register"
            onPress={() => router.push('/registerScreen')}
          />
          <Button title="Login" onPress={handleLogin} />
        </View>
      )}
    </>
  )
}

export default LoginScreen
