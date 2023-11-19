import { ReactNode } from 'react'

export interface INotificationsContextValue {
  expoPushToken: string | null
  devicePushToken: string | null
  notification: any
  hasPushPermission: boolean
}

export interface INotificationsContextProps {
  children: ReactNode
}
