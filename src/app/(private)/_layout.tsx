import { FontAwesome } from '@expo/vector-icons'
import { Tabs } from 'expo-router/tabs'
import { Text, TouchableOpacity } from 'react-native'
import { useAuth } from '@/contexts/AuthContext'

const TabsLayout = () => {
  const { logout } = useAuth()

  return (
    <Tabs
      screenOptions={{
        headerTitleAlign: 'center',
        tabBarLabelPosition: 'beside-icon',
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#6c63ff',
        tabBarActiveBackgroundColor: '#6c63ff',
        tabBarLabelStyle: { fontSize: 14, fontWeight: '500' }
      }}
    >
      <Tabs.Screen
        name="homeScreen"
        options={{
          headerTitle: 'Tasks',
          tabBarLabel: 'Home',
          headerRight: () => (
            <TouchableOpacity
              onPress={logout}
              style={{ backgroundColor: '#6c63ff', paddingVertical: 6, paddingHorizontal: 10, marginRight: 10, borderRadius: 6 }}
            >
              <Text style={{ color: '#fff', fontWeight: '500' }}>Logout</Text>
            </TouchableOpacity>
          ),
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome name="home" size={focused ? 22 : 18} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="settingsScreen"
        options={{
          headerTitle: 'Settings Central',
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome name="gear" size={focused ? 22 : 18} color={color} />
          )
        }}
      />
    </Tabs>
  )
}

export default TabsLayout
