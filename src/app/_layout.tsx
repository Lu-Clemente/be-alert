import { Stack } from "expo-router/stack";

const StackLayout = () => {
  return (
    <Stack screenOptions={{ headerTitleAlign: "center" }}>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Login",
        }}
      />
      <Stack.Screen
        name="registerScreen"
        options={{
          headerTitle: "Create Account",
        }}
      />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default StackLayout;
