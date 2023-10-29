import { View, Text, Button, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { useAuth } from "@/contexts/AuthContext";

const LoginScreen = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const tryLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      login("test@mail.com", "senha123");
    }, 2000);
  };

  return (
    <>
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Login Screen</Text>
          <Button
            title="Go to Register"
            onPress={() => router.push("/registerScreen")}
          />
          <Button title="Login" onPress={tryLogin} />
        </View>
      )}
    </>
  );
};

export default LoginScreen;
