import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../styles/global";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>FitLife</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 16,
    backgroundColor: colors.primary,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    fontSize: 22,
    color: colors.textLight,
    fontWeight: "bold",
    textAlign: "center",
  },
});
