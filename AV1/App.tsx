import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigation/AppNavigator";
import { HabitsProvider } from "./src/context/HabitsContext";

export default function App() {
  return (
    <HabitsProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </HabitsProvider>
  );
}
