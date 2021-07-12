import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { formatDate } from "../../helpers/formatDate";

import NotActive from "../../images/icons/notActive.svg"

const TxDetail = ({ navigation, route }) => {
  const item = route.params;
  const [loaded] = useFonts({
    MontserratSemiBold: require("../../../assets/fonts/Montserrat-SemiBold.ttf"),
    MontserratRegular: require("../../../assets/fonts/Montserrat-Regular.ttf"),
    MontserratMedium: require("../../../assets/fonts/Montserrat-Medium.ttf"),
    MontserratBold: require("../../../assets/fonts/Montserrat-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  console.log(route.params);
  const StatusBlock = () => {
      return <View>
          <Text>Status1</Text>
          <View></View>
      </View>
  }
  return (
    <View style={styles.mainView}>
      <View style={styles.headerView}>
        <Text style={styles.title}>You are paying</Text>
        <Text style={styles.titleName}>{item.receiverName}</Text>
      </View>
      <Text style={styles.amount}>
        {item.receiverCurrency == "INR" ? "₹" : "£"} {item.amount}
      </Text>
      <Text style={styles.descTitle}>For</Text>
      <Text style={styles.desc}>{item.description}</Text>
      {item.paymentMode == "deliver" ? (
        <View>
          <Text style={styles.descTitle}>Delivered on</Text>
          <Text style={styles.desc}>{formatDate(item.createdAt)}</Text>
        </View>
      ) : (
        <View>
          <Text style={styles.descTitle}>Promised on</Text>
          <Text style={styles.desc}>{formatDate(item.createdAt)}</Text>
          <Text style={styles.descTitle}>Expiring on</Text>
          <Text style={styles.desc}>{formatDate(item.expiry)}</Text>
        </View>
      )}
      <Text style={styles.descTitle}>Status</Text>
      <View>
          <StatusBlock/>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainView: {
    height: "100%",
    backgroundColor: "#ffffff",
  },
  headerView: {
    height: 90,
    backgroundColor: "#000000",
  },
  title: {
    fontSize: 18,
    fontFamily: "MontserratSemiBold",
    letterSpacing: 0.45,
    color: "#ffffff",
    textAlign: "center",
  },
  titleName: {
    fontSize: 30,
    fontFamily: "MontserratMedium",
    letterSpacing: 2.25,
    color: "#ffffff",
    textAlign: "center",
    marginTop: 8,
  },
  amount: {
    fontSize: 35,
    fontFamily: "MontserratBold",
    letterSpacing: 3.35,
    color: "#000000",
    textAlign: "center",
    marginTop: 23,
  },
  descTitle: {
    fontSize: 23,
    fontFamily: "MontserratMedium",
    letterSpacing: 1.73,
    color: "#000000",
    marginTop: 18,
    marginLeft: 40,
  },
  desc: {
    fontSize: 20,
    fontFamily: "MontserratBold",
    letterSpacing: 1.5,
    color: "#000000",
    marginLeft: 40,
  },
});

export default TxDetail;
