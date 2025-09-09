import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>{children}</View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fa",
  },
  content: {
    flex: 1,
    padding: 16,
  },
});
