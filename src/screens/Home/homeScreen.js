import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";

import Logo from "../../images/logo/logo.svg";
import AddTransaction from "../../images/icons/addTransaction.svg";
import SearchIcon from "../../images/icons/searchIcon.svg";

const HomeScreen = ({ navigation }) => {
  const [currentTab, setCurrentTab] = useState("promises");
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
          style={styles.searchIconView}
          // onPress={() => navigation.push("Settings")}
        >
          <SearchIcon width={"100%"} height={"100%"} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.logoView}
          onPress={() => navigation.push("Settings")}
        >
          <Logo width={"100%"} height={"100%"} />
        </TouchableOpacity>
      </View>
      <View style={styles.tabView}>
        <TouchableOpacity
          onPress={() => setCurrentTab("promises")}
          style={[
            styles.button,
            currentTab == "promises"
              ? { backgroundColor: "#000000" }
              : { backgroundColor: "#ffffff" },
          ]}
        >
          <Text
            style={[
              styles.buttonText,
              currentTab == "promises"
                ? { color: "#ffffff" }
                : { color: "#000000" },
            ]}
          >
            PROMISES
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCurrentTab("receivables")}
          style={[
            styles.button,
            currentTab == "promises"
              ? { backgroundColor: "#ffffff" }
              : { backgroundColor: "#000000" },
          ]}
        >
          <Text
            style={[
              styles.buttonText,
              currentTab == "promises"
                ? { color: "#000000" }
                : { color: "#ffffff" },
            ]}
          >
            RECEIVABLES
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.currentTabView}></View>
      <TouchableOpacity
        onPress={() => navigation.push("ChooseContact")}
        style={styles.addButton}
      >
        <AddTransaction height={"100%"} width={"100%"} />
      </TouchableOpacity>
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
    marginLeft: 65,
  },
  searchIconView: {
    width: 30,
    height: 30,
    borderRadius: 25,
    marginTop: 35,
    left: 50,
  },
  tabView: {
    marginTop: 13,
    height: 33,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "space-between",
  },
  button: {
    height: 33,
    width: 160,
    justifyContent: "center",
    borderWidth: 1,
  },
  buttonText: {
    textAlign: "center",
    fontFamily: "MontserratSemiBold",
    fontSize: 17,
    letterSpacing: 0.42,
  },
  currentTabView: {
    height: "100%",
    backgroundColor: "#ffffff",
    marginTop: 20,
    width: 320,
    alignSelf: "center",
  },
  addButton: {
    height: 70,
    width: 70,
    position: "absolute",
    bottom: 55,
    right: 40,
    borderRadius: 35,
    backgroundColor: "#000000",
  },
});
export default HomeScreen;
