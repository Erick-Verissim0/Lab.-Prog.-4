import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../styles/global";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>© 2025 Novo Verão</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    padding: 12,
    backgroundColor: colors.footer,
  },
  text: {
    textAlign: "center",
    fontSize: 14,
    color: colors.textDark,
  },
});
