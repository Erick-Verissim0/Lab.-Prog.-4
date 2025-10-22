import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { profileStyles as styles } from "../styles/screens/profileStyle";

export default function ProfileScreen() {
  const { user, logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo, {user?.name || "Usuário"}!</Text>
      <Button title="Sair" onPress={logout} />
    </View>
  );
}
