import { Stack } from 'expo-router/stack'

const StackLayout = () => {
  return (
    <Stack screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen
        name="loginScreen"
        options={{
          headerTitle: 'Login'
        }}
      />
      <Stack.Screen
        name="registerScreen"
        options={{
          headerTitle: 'Create Account'
        }}
      />
    </Stack>
  )
}

export default StackLayout
