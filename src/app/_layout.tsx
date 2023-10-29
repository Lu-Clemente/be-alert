import { Slot, useRouter, useSegments } from 'expo-router'
import React, { useEffect } from 'react'
import * as Updates from 'expo-updates'
import { AuthProvider, useAuth } from '@/contexts/AuthContext'

const InitialLayout = () => {
  const segments = useSegments()
  const router = useRouter()
  const { token } = useAuth()

  const choosePublicOrPrivatePaths = () => {
    const inTabsGroup = segments[0] === '(private)'
    const inRegisterScreen = segments[1] === 'registerScreen'

    if (token && !inTabsGroup && !inRegisterScreen) {
      router.replace('/(private)/homeScreen')
    } else if (!token) {
      router.replace('/(public)/loginScreen')
    }
  }

  useEffect(() => {
    choosePublicOrPrivatePaths()
  }, [token])

  return <Slot />
}

const RootLayout = () => {
  async function onFetchUpdateAsync() {
    try {
      const update = await Updates.checkForUpdateAsync()

      if (update.isAvailable) {
        await Updates.fetchUpdateAsync()
        await Updates.reloadAsync()
      }
    } catch (error) {
      alert(`Error fetching latest Expo update: ${error}`)
    }
  }

  if (!__DEV__) {
    onFetchUpdateAsync()
  }

  return (
    <AuthProvider>
      <InitialLayout />
    </AuthProvider>
  )
}

export default RootLayout
