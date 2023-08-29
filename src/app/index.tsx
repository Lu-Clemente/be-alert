import { View, Text, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const LoginScreen = () => {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Login Screen</Text>
      <Button
        title="Go to Register"
        onPress={() => router.push("/registerScreen")}
      />
      <Button title="Login" onPress={() => router.replace("/homeScreen")} />
    </View>
  );
};

export default LoginScreen;
