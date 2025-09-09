import { StyleSheet } from "react-native";
import { colors } from "../global";

export const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
    color: colors.textDark,
  },
  infoCard: {
    backgroundColor: colors.card,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  infoText: {
    fontSize: 16,
    color: colors.textDark,
    marginBottom: 4,
  },
});
