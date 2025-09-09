import { StyleSheet } from "react-native";
import { colors } from "../global";

export const addScreen= StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 16,
    color: colors.textDark,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    backgroundColor: colors.card,
    fontSize: 16,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: colors.textLight,
    fontWeight: "bold",
    fontSize: 16,
  },
  error: {
    color: colors.error,
    marginBottom: 10,
    fontSize: 14,
  },
});
