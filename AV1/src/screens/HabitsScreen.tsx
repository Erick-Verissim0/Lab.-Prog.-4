import React, { useContext } from "react";
import { View, Text, FlatList, TouchableOpacity, Animated } from "react-native";
import MainLayout from "../layout/MainLayout";
import { habitsStyles } from "../styles/screens/habitsScreen";
import { HabitsContext } from "../context/HabitsContext";

export default function HabitosScreen({ navigation }: any) {
  const { habits, toggleHabit } = useContext(HabitsContext);

  return (
    <MainLayout>
      <View style={habitsStyles.container}>
        <Text style={habitsStyles.subtitle}>Meus Hábitos</Text>

        <FlatList
          data={habits}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                habitsStyles.card,
                item.completed && habitsStyles.cardCompleted,
              ]}
              onPress={() => toggleHabit(item.id)}
            >
              <Text
                style={[
                  habitsStyles.cardText,
                  item.completed && habitsStyles.cardTextCompleted,
                ]}
              >
                {item.completed ? "✅ " : "⬜ "} {item.nome}
              </Text>
            </TouchableOpacity>
          )}
        />

        <TouchableOpacity
          style={habitsStyles.button}
          onPress={() => navigation.navigate("Add")}
        >
          <Text style={habitsStyles.buttonText}>Adicionar Hábito</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[habitsStyles.button, { backgroundColor: "#888" }]}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={habitsStyles.buttonText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </MainLayout>
  );
}
