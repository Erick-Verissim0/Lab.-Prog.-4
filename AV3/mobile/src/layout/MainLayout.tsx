import React, { ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { colors } from "../styles/global";

type MainLayoutProps = {
  children?: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
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
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    padding: 16,
  },
});
