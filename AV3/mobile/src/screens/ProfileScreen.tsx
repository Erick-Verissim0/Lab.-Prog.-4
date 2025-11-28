import React, { useContext } from "react";
import { View, Text, Button, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";
import { colors } from "../styles/global";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileScreen() {
  const { user, logout } = useContext(AuthContext);
  const navigation = useNavigation();

  const MOCK_USER: any = {
    name: user?.name || "João Silva",
    email: "joao.silva@example.com",
    gender: "Masculino",
    birthDate: "15/08/1990",
    phone: "+55 11 91234-5678",
    address: {
      street: "Rua das Flores, 123",
      city: "São Paulo",
      state: "SP",
      zip: "01234-567",
      country: "Brasil",
    },
    membership: "Premium",
    recentOrders: [
      { id: "001", item: "Camiseta React Native", date: "10/10/2025", price: 89.9 },
      { id: "002", item: "Tênis Adidas Ultraboost", date: "05/09/2025", price: 299.9 },
      { id: "003", item: "Fone Bluetooth JBL Tune", date: "20/08/2025", price: 249.9 },
    ],
  };

  return (
    <ScrollView style={profileStyles.container} contentContainerStyle={{ padding: 16 }}>
      {/* Botão de voltar */}
      <TouchableOpacity
        style={profileStyles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>

      <Text style={profileStyles.sectionTitle}>Olá, {MOCK_USER.name}!</Text>

      <View style={profileStyles.infoBox}>
        <Text style={profileStyles.infoLabel}>Email:</Text>
        <Text style={profileStyles.infoValue}>{MOCK_USER.email}</Text>
      </View>

      <View style={profileStyles.infoBox}>
        <Text style={profileStyles.infoLabel}>Gênero:</Text>
        <Text style={profileStyles.infoValue}>{MOCK_USER.gender}</Text>
      </View>

      <View style={profileStyles.infoBox}>
        <Text style={profileStyles.infoLabel}>Data de Nascimento:</Text>
        <Text style={profileStyles.infoValue}>{MOCK_USER.birthDate}</Text>
      </View>

      <View style={profileStyles.infoBox}>
        <Text style={profileStyles.infoLabel}>Telefone:</Text>
        <Text style={profileStyles.infoValue}>{MOCK_USER.phone}</Text>
      </View>

      <View style={profileStyles.infoBox}>
        <Text style={profileStyles.infoLabel}>Endereço:</Text>
        <Text style={profileStyles.infoValue}>
          {MOCK_USER.address.street}, {MOCK_USER.address.city} - {MOCK_USER.address.state}{" "}
          {MOCK_USER.address.zip}, {MOCK_USER.address.country}
        </Text>
      </View>

      <View style={profileStyles.infoBox}>
        <Text style={profileStyles.infoLabel}>Tipo de Conta:</Text>
        <Text style={profileStyles.infoValue}>{MOCK_USER.membership}</Text>
      </View>

      <Text style={[profileStyles.sectionTitle, { marginTop: 20 }]}>Pedidos Recentes</Text>
      {MOCK_USER.recentOrders.map((order: any) => (
        <View key={order.id} style={profileStyles.orderBox}>
          <Text style={profileStyles.orderItem}>{order.item}</Text>
          <Text style={profileStyles.orderDate}>{order.date}</Text>
          <Text style={profileStyles.orderPrice}>R$ {order.price.toFixed(2)}</Text>
        </View>
      ))}

      <View style={{ marginVertical: 20 }}>
        <Button title="Sair" onPress={logout} color={colors.primary} />
      </View>
    </ScrollView>
  );
}

export const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  backButton: {
    marginBottom: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.textDark,
    marginBottom: 12,
  },
  infoBox: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  infoLabel: {
    fontSize: 14,
    color: "#888",
  },
  infoValue: {
    fontSize: 16,
    color: colors.textDark,
    fontWeight: "600",
    marginTop: 2,
  },
  orderBox: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  orderItem: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.textDark,
  },
  orderDate: {
    fontSize: 14,
    color: "#666",
    marginVertical: 2,
  },
  orderPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.primary,
  },
});
