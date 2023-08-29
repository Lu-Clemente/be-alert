import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Tabs } from "expo-router/tabs";
import { Button } from "react-native";

const TabsLayout = () => {
  const router = useRouter();
  return (
    <Tabs
      screenOptions={{
        headerTitleAlign: "center",
        tabBarLabelPosition: "beside-icon",
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#4a7e61",
        tabBarLabelStyle: { fontSize: 14, fontWeight: "500" },
        tabBarActiveBackgroundColor: "#4a7e61",
      }}
    >
      <Tabs.Screen
        name="homeScreen"
        options={{
          headerTitle: "Tasks",
          tabBarLabel: "Home",
          headerRight: () => (
            <Button title="Logout" onPress={() => router.replace("/")} />
          ),
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="home"
              size={focused ? 20 : 15}
              color={focused ? "#fff" : "#4a7e61"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settingsScreen"
        options={{
          headerTitle: "Settings Central",
          tabBarLabel: "Settings",
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="gear"
              size={focused ? 20 : 15}
              color={focused ? "#fff" : "#4a7e61"}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
