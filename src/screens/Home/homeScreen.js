import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

const HomeScreen = () => {
  const [loaded] = useFonts({
    MontserratBold: require("../../../assets/fonts/Montserrat-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View>
      <Text style={{ fontFamily: "MontserratBold", fontSize: 30 }}>
        Montserrat
      </Text>
    </View>
  );
};

export default HomeScreen;
