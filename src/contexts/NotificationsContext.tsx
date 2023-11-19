import { createContext, useContext, useEffect, useRef, useState } from 'react'
import * as Device from 'expo-device'
import * as Notifications from 'expo-notifications'
import Constants from 'expo-constants'
import { Alert, Linking, Platform } from 'react-native'
import {
  INotificationsContextProps,
  INotificationsContextValue
} from '@/types/notifications'
import useAppState from '@/hooks/useAppState'

const NotificationsContext = createContext<
  INotificationsContextValue | undefined
>(undefined)

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false
  })
})

export const NotificationsProvider: React.FC<INotificationsContextProps> = ({
  children
}) => {
  const appState = useAppState()

  const notificationListener = useRef(null)
  const responseListener = useRef(null)

  const [expoPushToken, setExpoPushToken] = useState<string | null>(null)
  const [devicePushToken, setDevicePushToken] = useState<string | null>(null)
  const [notification, setNotification] = useState({})
  const [hasPushPermission, setHasPushPermission] = useState(false)

  const checkPermission = async () => {
    const { status } = await Notifications.getPermissionsAsync()
    return status
  }

  const goToSettings = () => {
    // Guide user to app settings
    Alert.alert(
      'Enable Notifications',
      'To use this app and receive notifications, please enable them in your device settings.',
      [
        {
          text: 'OK',
          onPress: () => {
            Linking.openSettings()
          }
        }
      ]
    )
  }

  const registerForPushNotificationsAsync = async (): Promise<{
    token?: {
      expoToken: string
      deviceToken: string
    }
    error?: string
  }> => {
    let token

    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C'
      })
    }

    if (Device.isDevice) {
      const existingStatus = await checkPermission()

      let finalStatus = existingStatus

      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync()
        finalStatus = status
      }

      let newStatus

      if (finalStatus !== 'granted') {
        setExpoPushToken(null)
        setDevicePushToken(null)
        goToSettings()
      }
      newStatus = await checkPermission()

      if (newStatus !== 'granted') {
        return {
          error: "Unable to get user's push notification token."
        }
      }

      token = {
        expoToken: (
          await Notifications.getExpoPushTokenAsync({
            projectId: Constants.expoConfig.extra.eas.projectId
          })
        ).data,
        deviceToken: (await Notifications.getDevicePushTokenAsync()).data
      }
    } else {
      alert('Must use physical device for Push Notifications')
      return {
        error: "Unable to get user's push notification token."
      }
    }

    return {
      token
    }
  }

  useEffect(() => {
    if (appState == 'active') {
      registerForPushNotificationsAsync()
        .then((res) => {
          if (res.token) {
            setExpoPushToken(res.token.expoToken)
            setDevicePushToken(res.token.deviceToken)
            setHasPushPermission(true)
          } else {
            setHasPushPermission(false)
          }
        })
        .catch((err) => console.log(err))
    }

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification)
      })

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(
          'Inside "addNotificationResponseReceivedListener" response: ',
          response
        )
      })

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current)
      Notifications.removeNotificationSubscription(responseListener.current)
    }
  }, [appState])

  return (
    <NotificationsContext.Provider
      value={{
        expoPushToken,
        notification,
        devicePushToken,
        hasPushPermission
      }}
    >
      {children}
    </NotificationsContext.Provider>
  )
}

export const useNotifications = () => {
  const context = useContext(NotificationsContext)
  if (context === undefined) {
    throw new Error(
      'useNotifications must be used within an NotificationsProvider'
    )
  }
  return context
}
