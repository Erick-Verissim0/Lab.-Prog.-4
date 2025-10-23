import React, { useContext } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { CartContext } from "../context/CartContext";
import { MOCK_PRODUCTS } from "../mocks/mocksProduts";
import { colors } from "../styles/global";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function ProductDetailScreen() {
  const { addToCart } = useContext(CartContext);
  const route = useRoute();
  const navigation = useNavigation();
  const { productId }: any = route.params;

  const product: any = MOCK_PRODUCTS.find((p) => p.id === productId);

  if (!product) return null;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={26} color="#333" />
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={styles.imageScroll}
        >
          {product.images.map((img: any, index: any) => (
            <Image key={index} source={{ uri: img }} style={styles.image} />
          ))}
        </ScrollView>

        <View style={styles.infoContainer}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productPrice}>R$ {product.price.toFixed(2)}</Text>

          <Text style={styles.sectionTitle}>Descrição</Text>
          <Text style={styles.description}>{product.description}</Text>

          <View style={styles.divider} />

          <Text style={styles.sectionTitle}>Benefícios</Text>
          <Text style={styles.features}>
            ✅ Alta qualidade garantida{"\n"}
            🚚 Envio rápido e seguro{"\n"}
            💳 Pague em até 12x sem juros{"\n"}
            🔄 Devolução gratuita em até 7 dias
          </Text>
        </View>
      </ScrollView>

      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => addToCart(product)}
        >
          <Ionicons name="cart-outline" size={22} color="#fff" />
          <Text style={styles.cartButtonText}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 10,
    backgroundColor: "#fff",
    borderRadius: 25,
    padding: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  imageScroll: {
    width,
    height: 360,
  },
  image: {
    width,
    height: 360,
    resizeMode: "cover",
  },
  infoContainer: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  productName: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.textDark,
    marginTop: 16,
  },
  productPrice: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.primary,
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.textDark,
    marginTop: 16,
    marginBottom: 6,
  },
  description: {
    fontSize: 15,
    color: "#555",
    lineHeight: 22,
  },
  features: {
    fontSize: 15,
    color: "#444",
    lineHeight: 24,
    marginTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 20,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    padding: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 8,
  },
  cartButton: {
    backgroundColor: colors.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 30,
    width: "100%",
  },
  cartButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
});
