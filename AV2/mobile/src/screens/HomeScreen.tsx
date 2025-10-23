import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../navigation/AppNavigator";
import MainLayout from "../layout/MainLayout";
import { MOCK_PRODUCTS } from "../mocks/mocksProduts";
import { colors } from "../styles/global";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [search, setSearch] = useState("");

  const filteredProducts = MOCK_PRODUCTS.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <MainLayout>
      <FlatList
        ListHeaderComponent={
          <>
            <View style={styles.bannerContainer}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
                }}
                style={styles.banner}
                resizeMode="cover"
              />
              <View style={styles.bannerTextContainer}>
                <Text style={styles.bannerTitle}>Promoções Imperdíveis 🔥</Text>
                <Text style={styles.bannerSubtitle}>
                  Até 50% de desconto nos produtos selecionados!
                </Text>
              </View>
            </View>

            <View style={styles.searchContainer}>
              <TextInput
                style={styles.searchInput}
                placeholder="Buscar produtos..."
                placeholderTextColor="#999"
                value={search}
                onChangeText={setSearch}
              />
            </View>

            <Text style={styles.sectionTitle}>Produtos em Destaque</Text>
          </>
        }
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate("ProductDetail", { productId: item.id })
            }
          >
            <View style={styles.imageWrapper}>
              <Image
                source={{ uri: item.images[0] }}
                style={styles.productImage}
                resizeMode="contain"
              />
            </View>

            <View style={styles.cardInfo}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>R$ {item.price.toFixed(2)}</Text>
              <TouchableOpacity
                style={styles.detailButton}
                onPress={() =>
                  navigation.navigate("ProductDetail", { productId: item.id })
                }
              >
                <Text style={styles.detailButtonText}>Ver Detalhes</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      />
    </MainLayout>
  );
}

const CARD_WIDTH = (width - 48) / 2;

const styles = StyleSheet.create({
  bannerContainer: {
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 16,
    overflow: "hidden",
    position: "relative",
  },
  banner: {
    width: "100%",
    height: 180,
  },
  bannerTextContainer: {
    position: "absolute",
    bottom: 20,
    left: 16,
  },
  bannerTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  bannerSubtitle: {
    color: "#fff",
    fontSize: 14,
  },
  searchContainer: {
    marginHorizontal: 16,
    marginTop: 16,
  },
  searchInput: {
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 20,
    marginHorizontal: 16,
    color: colors.textDark,
  },
  row: {
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginBottom: 20,
    width: CARD_WIDTH,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  imageWrapper: {
    width: "100%",
    height: 160,
    backgroundColor: "#f9f9f9",
    justifyContent: "center",
    alignItems: "center",
  },
  productImage: {
    width: "90%",
    height: "90%",
  },
  cardInfo: {
    padding: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.textDark,
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 15,
    color: colors.primary,
    marginBottom: 8,
    fontWeight: "bold",
  },
  detailButton: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    paddingVertical: 8,
    alignItems: "center",
  },
  detailButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
