import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";

import {
  createNewPromise,
  createDeliverNow,
} from "../../helpers/payment/processNewTx";

import TxCreated from "../../images/icons/txCreated.svg";

const CreateNewTx = ({ navigation, route }) => {
  const [txCreated, setTxCreated] = useState(false);

  const func = async () => {
    var res = Boolean();
    if (route.params.paymentMode == "promise") {
      res = await createNewPromise(route.params);
    } else if (route.params.paymentMode == "deliver") {
      res = await createDeliverNow(route.params);
    }
    if (res) {
      setTxCreated(true);
    }
  };

  useEffect(() => {
    console.log(route.params);
    func();
    return () => {
      setTxCreated(false);
    };
  }, []);

  const [loaded] = useFonts({
    MontserratBold: require("../../../assets/fonts/Montserrat-Bold.ttf"),
    MontserratRegular: require("../../../assets/fonts/Montserrat-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {txCreated ? (
        <View>
          <Text style={styles.titleName}>Done</Text>
          <View style={styles.txCreatedSVG}>
            <TxCreated height={"100%"} width={"100%"} />
          </View>
          <TouchableOpacity onPress={() => navigation.push("Landing")}>
            <Text style={styles.homeButton}>Go to Home</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          {route.params.paymentMode == "promise" ? (
            <Text style={styles.titleName}>Creating your promise</Text>
          ) : (
            <Text style={styles.titleName}>Paying {route.params.name}</Text>
          )}
          <View style={styles.loaderView}>
            <ActivityIndicator size={120} color="#ffffff" />
          </View>
        </View>
      )}
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
    alignSelf: "center",
  },
  loaderView: {
    marginTop: 56,
  },
  txCreatedSVG: {
    width: 200,
    height: 200,
    backgroundColor: "#ffffff",
    borderRadius: 100,
    marginTop: 26,
  },
  homeButton: {
    color: "#ffffff",
    fontFamily: "MontserratRegular",
    letterSpacing: 3,
    textDecorationLine: "underline",
    marginTop: 30,
    alignSelf: "center",
  },
});
export default CreateNewTx;
