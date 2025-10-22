import React from "react";
import { View, FlatList } from "react-native";
import ProductCard from "../components/ProductCard";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";
import { homeStyles as styles } from "../styles/screens/HomeStyles";

const MOCK_PRODUCTS = [
  { id: "1", name: "Camiseta React", price: 89.9 },
  { id: "2", name: "Tênis Node", price: 299.9 },
  { id: "3", name: "Boné TypeScript", price: 59.9 },
];

export default function HomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <FlatList
        data={MOCK_PRODUCTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() =>
              navigation.navigate("ProductDetail", { productId: item.id })
            }
          />
        )}
      />
    </View>
  );
}
