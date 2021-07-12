import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { formatDate } from "../../helpers/formatDate";

const TxDisplayBlock = ({ item, navigation }) => {
  const [loaded] = useFonts({
    MontserratSemiBold: require("../../../assets/fonts/Montserrat-SemiBold.ttf"),
    MontserratRegular: require("../../../assets/fonts/Montserrat-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <TouchableOpacity onPress={() => navigation.push("TxDetail", item)}>
      <View style={styles.mainBlock}>
        <View style={styles.leftView}>
          <Text style={styles.name}>{item.receiverName}</Text>
          <Text style={styles.amount}>
            {item.receiverCurrency == "INR" ? "₹" : "£"} {item.amount}
          </Text>
        </View>
        <View>
          <View style={styles.statusView}>
            {item.expiry == "Delivered" ? (
              <Text style={styles.statusText}>DELIVERED ON</Text>
            ) : (
              <Text style={styles.statusText}>EXPIRING ON</Text>
            )}
          </View>
          {item.expiry == "Delivered" ? (
            <Text style={styles.displayDate}>{formatDate(item.createdAt)}</Text>
          ) : (
            <Text style={styles.displayDate}>{formatDate(item.expiry)}</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  mainBlock: {
    height: 85,
    width: 320,
    borderRadius: 15,
    borderColor: "#707070",
    borderWidth: 0.3,
    flexDirection: "row",
  },
  leftView: {
    width: "70%",
  },
  name: {
    fontSize: 17,
    letterSpacing: 0.42,
    fontFamily: "MontserratSemiBold",
    marginLeft: 15,
    marginTop: 20,
  },
  amount: {
    fontSize: 13,
    letterSpacing: 1.3,
    fontFamily: "MontserratRegular",
    marginLeft: 15,
    marginTop: 7,
  },
  statusView: {
    marginTop: 19,
    height: 15,
    backgroundColor: "#000000",
    width: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  statusText: {
    fontSize: 9,
    letterSpacing: 0.09,
    fontFamily: "MontserratSemiBold",
    color: "#ffffff",
  },
  displayDate: {
    fontSize: 9,
    letterSpacing: 0.23,
    fontFamily: "MontserratSemiBold",
    color: "#000000",
    marginTop: 10,
    left: 1,
  },
});

export default TxDisplayBlock;
