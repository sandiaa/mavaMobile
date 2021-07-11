import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

const ContactBlock = ({ item, navigation }) => {
  const [loaded] = useFonts({
    MontserratSemiBold: require("../../../assets/fonts/Montserrat-SemiBold.ttf"),
    MontserratRegular: require("../../../assets/fonts/Montserrat-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View>
      <TouchableOpacity
        style={styles.block}
        onPress={() => navigation.push("EnterDetails", { data: item })}
      >
        <Text style={styles.name}>
          {typeof item.lastName === "undefined"
            ? item.firstName
            : `${item.firstName + " " + item.lastName}`}
        </Text>
        <Text style={styles.number}>{item.number}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  block: {
    width: 298,
    height: 85,
    borderRadius: 15,
    borderColor: "#707070",
    borderWidth: 0.3,
    backgroundColor: "#ffffff",
  },
  name: {
    fontFamily: "MontserratSemiBold",
    fontSize: 17,
    letterSpacing: 0.42,
    marginTop: 22,
    marginLeft: 14,
  },
  number: {
    fontFamily: "MontserratRegular",
    fontSize: 13,
    letterSpacing: 1.3,
    marginTop: 7,
    marginLeft: 14,
  },
});

export default ContactBlock;
