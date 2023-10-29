import { useAuth } from "@/contexts/AuthContext";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Tabs } from "expo-router/tabs";
import { Button } from "react-native";

const TabsLayout = () => {
  const router = useRouter();

  const { logout, token } = useAuth();

  return (
    <Tabs
      screenOptions={{
        headerTitleAlign: "center",
        tabBarLabelPosition: "beside-icon",
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#4a7e61",
        tabBarActiveBackgroundColor: "#4a7e61",
        tabBarLabelStyle: { fontSize: 14, fontWeight: "500" },
      }}
    >
      <Tabs.Screen
        name="homeScreen"
        options={{
          headerTitle: "Tasks",
          tabBarLabel: "Home",
          headerRight: () => <Button title="Logout" onPress={logout} />,
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome name="home" size={focused ? 22 : 18} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settingsScreen"
        options={{
          headerTitle: "Settings Central",
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome name="gear" size={focused ? 22 : 18} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
