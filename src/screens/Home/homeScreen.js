import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useFonts } from "expo-font";
import { useSelector } from "react-redux";

import Logo from "../../images/logo/logo.svg";
import AddTransaction from "../../images/icons/addTransaction.svg";
import SearchIcon from "../../images/icons/searchIcon.svg";
import PromisesScreen from "./promisesScreen";
import ReceivablesScreen from "./receivablesScreen";
import { formatTxList } from "../../helpers/formatTxList";
import { fetchTotalReceivables } from "../../helpers/fetchTotalReceivables";

const HomeScreen = ({ navigation }) => {
  const [currentTab, setCurrentTab] = useState("promises");
  const user = useSelector((state) => state);
  const [promisesList, setPromisesList] = useState([]);
  const [receivablesList, setReceivablesList] = useState([]);
  const [listLoaded, setListLoaded] = useState(false);
  const [totalReceivables, setTotalReceivables] = useState("");

  const [loaded] = useFonts({
    MontserratBold: require("../../../assets/fonts/Montserrat-Bold.ttf"),
    MontserratSemiBold: require("../../../assets/fonts/Montserrat-SemiBold.ttf"),
  });

  const fetchFormattedList = async () => {
    const list = await formatTxList(JSON.parse(user.user.user));
    setPromisesList(list.promises);
    setReceivablesList(list.receivables);
    const total = fetchTotalReceivables(list.receivables);
    setTotalReceivables(total);
    setListLoaded(true);
  };
  useEffect(() => {
    fetchFormattedList();
    return () => {
      setListLoaded(false);
    };
  }, [user]);

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#000000"} />
      <View style={styles.header}>
        <View style={styles.headerTextView}>
          <Text style={[styles.headerTitle, { marginTop: 21 }]}>Total</Text>
          {totalReceivables != "" ? (
            <Text style={[styles.headerTitle, { marginTop: 15 }]}>
              ??? {totalReceivables}
            </Text>
          ) : (
            <ActivityIndicator
              style={{ marginTop: 15 }}
              size={"small"}
              color="#ffffff"
            />
          )}
        </View>
        <View style={{ flexDirection: "row", left: 120 }}>
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
      {listLoaded ? (
        <View style={styles.currentTabView}>
          {currentTab == "promises" ? (
            <PromisesScreen data={promisesList} navigation={navigation} />
          ) : (
            <ReceivablesScreen data={receivablesList} navigation={navigation} />
          )}
        </View>
      ) : (
        <View style={styles.loaderView}>
          <ActivityIndicator size={"large"} color="#000000" />
        </View>
      )}
      <TouchableOpacity
        onPress={() => navigation.push("SelectContact")}
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
    height: "83%",
    backgroundColor: "#ffffff",
    marginTop: 25,
    width: 320,
    alignSelf: "center",
    bottom: 10,
  },
  addButton: {
    height: 70,
    width: 70,
    position: "absolute",
    bottom: 45,
    right: 25,
    borderRadius: 35,
    backgroundColor: "#000000",
  },
  loaderView: {
    marginTop: 100,
  },
});
export default HomeScreen;
