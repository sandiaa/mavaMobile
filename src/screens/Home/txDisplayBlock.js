import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { formatDate } from "../../helpers/formatDate";

const TxDisplayBlock = ({ item, navigation }) => {
  console.log(item);
  const [loaded] = useFonts({
    MontserratSemiBold: require("../../../assets/fonts/Montserrat-SemiBold.ttf"),
    MontserratRegular: require("../../../assets/fonts/Montserrat-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  const getColor = (status) => {
    if (status == "REQUESTED" || status == "PENDING") return "#DAA520";
    else if (status == "WORKING") return "#3CB371";
    else if (status == "REJECTED" || status == "REFUNDED") return "#CD5C5C";
    else if (
      status == "REVIEWED" ||
      status == "TO REVIEW" ||
      status == "REWORK"
    )
      return "#4169E1";
    else if (status == "DELIVERED") return "#000000";
  };

  return (
    <View style={styles.mainBlock}>
      <View>
        <Text style={styles.name}>{item.receiverName}</Text>
        <Text style={styles.amount}>{item.amount}</Text>
      </View>
      <View>
        <View
          style={[
            styles.statusView,
            { backgroundColor: getColor("DELIVERED") },
          ]}
        >
          <Text style={styles.statusText}>STATUS</Text>
        </View>
        <Text style={styles.expiryTitle}>Expiring on:</Text>
        <Text style={styles.expiryDate}>{formatDate(item.expiry)}</Text>
      </View>
    </View>
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
  statusView: {
    width: 56,
    height: 13,
    alignItems: "center",
    marginTop: 19,
  },
  statusText: {
    fontSize: 9,
    letterSpacing: 0.09,
    fontFamily: "MontserratSemiBold",
    color: "#ffffff",
  },
  name: {
    fontSize: 17,
    letterSpacing: 0.42,
    fontFamily: "MontserratSemiBold",
    marginLeft: 15,
    marginTop: 20,
    width: 200,
  },
  amount: {
    fontSize: 13,
    letterSpacing: 1.3,
    fontFamily: "MontserratRegular",
    marginLeft: 15,
    marginTop: 7,
    width: 200,
  },
  expiryTitle: {
    fontSize: 10,
    letterSpacing: 0.23,
    fontFamily: "MontserratSemiBold",
    marginTop: 10,
    width: 70,
  },
  expiryDate: {
    fontSize: 9,
    letterSpacing: 0.23,
    fontFamily: "MontserratRegular",
    marginTop: 4,
    width: 200,
  },
});

export default TxDisplayBlock;
