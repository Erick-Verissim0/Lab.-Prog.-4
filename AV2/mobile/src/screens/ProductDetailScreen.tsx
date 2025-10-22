import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { CartContext } from "../context/CartContext";
import { useRoute } from "@react-navigation/native";
import { productDetailStyles as styles } from "../styles/screens/productDetailStyles";

const MOCK_PRODUCTS: any = {
  "1": { id: "1", name: "Camiseta React", price: 89.9 },
  "2": { id: "2", name: "Tênis Node", price: 299.9 },
  "3": { id: "3", name: "Boné TypeScript", price: 59.9 },
};

export default function ProductDetailScreen() {
  const { addToCart } = useContext(CartContext);
  const route = useRoute();
  const { productId }: any = route.params;
  const product = MOCK_PRODUCTS[productId];

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
      <Button title="Adicionar ao Carrinho" onPress={() => addToCart(product)} />
    </View>
  );
}
