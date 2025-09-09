import { StyleSheet } from "react-native";
import { colors } from "../global";

export const habitsStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 16,
    color: colors.textDark,
  },
  card: {
    backgroundColor: colors.card,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardCompleted: {
    backgroundColor: "#d4edda",
  },
  cardText: { fontSize: 16, color: colors.textDark, flex: 1 },
  cardTextCompleted: {
    textDecorationLine: "line-through",
    color: "#28a745",
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginTop: 12,
    alignItems: "center",
  },
  buttonText: { color: colors.textLight, fontWeight: "bold", fontSize: 16 },
});
