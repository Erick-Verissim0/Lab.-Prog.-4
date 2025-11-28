import React, { useState, useContext } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { loginStyles as styles } from "../styles/screens/loginStyles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";

export default function LoginScreen() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

const handleLogin = async () => {
  const success = await login(email, password);

  if (!success) {
    setError("Usuário ou senha inválido.");
  } else {
    setError(null);
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });
  }
};


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Novo Verão</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      {error && <Text style={styles.errorText}>{error}</Text>}

      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
}
