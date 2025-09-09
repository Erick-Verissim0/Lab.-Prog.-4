import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";
import MainLayout from "../layout/MainLayout";
import { homeStyles } from "../styles/screens/homeScreen";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  return (
    <MainLayout>
      <View style={homeStyles.container}>
        <Text style={homeStyles.title}>Bem-vindo ao FitLife</Text>

        <TouchableOpacity
          style={homeStyles.button}
          onPress={() => navigation.navigate("Habits")}
        >
          <Text style={homeStyles.buttonText}>Meus Hábitos</Text>
        </TouchableOpacity>
      </View>
    </MainLayout>
  );
}
