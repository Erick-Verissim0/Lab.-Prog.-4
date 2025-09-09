import { StyleSheet } from "react-native";

export const colors = {
  primary: "#00a8ff",
  background: "#f5f6fa",
  card: "#fff",
  textDark: "#2f3640",
  textLight: "#fff",
  error: "#e84118",
  footer: "#dcdde1",
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
