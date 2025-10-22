import React, { useContext } from "react";
import { View, Text, Button, FlatList } from "react-native";
import { CartContext } from "../context/CartContext";
import { cartStyles as styles } from "../styles/screens/cartStyle";

export default function CartScreen() {
  const { cart, clearCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.name} - R$ {item.price.toFixed(2)}
          </Text>
        )}
      />
      {cart.length > 0 ? (
        <Button title="Finalizar Compra" onPress={clearCart} />
      ) : (
        <Text style={styles.empty}>Carrinho vazio</Text>
      )}
    </View>
  );
}
