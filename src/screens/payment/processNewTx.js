import React, { useEffect } from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";

const ProcessNewTx = ({ navigation, route }) => {
  const [loaded] = useFonts({
    MontserratBold: require("../../../assets/fonts/Montserrat-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titleName}>Paying {route.params.name}</Text>
      <View style={styles.loaderView}>
        <ActivityIndicator size={120} color="#ffffff" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#000000",
  },
  titleName: {
    fontFamily: "MontserratBold",
    fontSize: 25,
    letterSpacing: 1.88,
    color: "#ffffff",
  },
  loaderView: {
    marginTop: 56,
  },
});
export default ProcessNewTx;