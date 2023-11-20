import PushNotificationsSVG from '@/components/PushNotificationsSVG'
import React from 'react'
import { Text, View } from 'react-native'

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text style={{ marginBottom: 40, fontSize: 13, fontWeight: '500' }}>
        Here you can find all your notifications (soon)
      </Text>
      <PushNotificationsSVG height={300} width={300} />
    </View>
  )
}

export default HomeScreen
