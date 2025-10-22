import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function ProductCard({ product, onPress }: any) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{product.name}</Text>
      <Text>R$ {product.price.toFixed(2)}</Text>
      <Button title="Ver Detalhes" onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: "#fff",
    borderRadius: 12,
    elevation: 3,
  },
  name: { fontSize: 18, fontWeight: "bold" },
});
