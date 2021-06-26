import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";

import Logo from "../../images/logo/logo.svg";

const HomeScreen = ({ navigation }) => {
  const [loaded] = useFonts({
    MontserratBold: require("../../../assets/fonts/Montserrat-Bold.ttf"),
    MontserratSemiBold: require("../../../assets/fonts/Montserrat-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#000000"} />
      <View style={styles.header}>
        <View style={styles.headerTextView}>
          <Text style={[styles.headerTitle, { marginTop: 21 }]}>
            Will be Yours!
          </Text>
          <Text style={[styles.headerTitle, { marginTop: 15 }]}>₹ 25000</Text>
        </View>
        <TouchableOpacity
          style={styles.logoView}
          onPress={() => navigation.push("Settings")}
        >
          <Logo width={"100%"} height={"100%"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#ffffff",
  },
  header: {
    height: 123,
    backgroundColor: "#000000",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    flexDirection: "row",
  },
  headerTitle: {
    fontFamily: "MontserratSemiBold",
    color: "#ffffff",
    fontSize: 25,
    letterSpacing: 2.5,
    marginLeft: 22,
  },
  headerTextView: {
    flexDirection: "column",
  },
  logoView: {
    backgroundColor: "#ffffff",
    width: 50,
    height: 50,
    borderRadius: 25,
    marginTop: 25,
    marginLeft: 75,
  },
});
export default HomeScreen;
