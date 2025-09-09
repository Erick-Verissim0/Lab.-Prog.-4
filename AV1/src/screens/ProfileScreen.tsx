import React from "react";
import { View, Text } from "react-native";
import MainLayout from "../layout/MainLayout";
import { profileStyles } from "../styles/screens/profileScreen";

export default function ProfileScreen() {
  return (
    <MainLayout>
      <View style={profileStyles.container}>
        <Text style={profileStyles.subtitle}>Meu Perfil</Text>

        <View style={profileStyles.infoCard}>
          <Text style={profileStyles.infoText}>Nome: Erick Veríssimo</Text>
          <Text style={profileStyles.infoText}>Idade: 22 anos</Text>
          <Text style={profileStyles.infoText}>Meta diária: 3 hábitos</Text>
        </View>
      </View>
    </MainLayout>
  );
}
