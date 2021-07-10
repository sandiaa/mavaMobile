import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

const TxDisplayBlock = ({ item, navigation }) => {
  const [loaded] = useFonts({
    MontserratSemiBold: require("../../../assets/fonts/Montserrat-SemiBold.ttf"),
    MontserratRegular: require("../../../assets/fonts/Montserrat-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return <View style={styles.mainBlock}></View>;
};
const styles = StyleSheet.create({
  mainBlock: {
    height: 85,
    width: 320,
    borderRadius: 15,
    borderColor: "#707070",
    borderWidth: 0.3,
  },
});

export default TxDisplayBlock;
