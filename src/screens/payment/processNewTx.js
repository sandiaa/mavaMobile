import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import { useSelector } from "react-redux";

import { createNewPromise } from "../../helpers/payment/createNewPromise";

const ProcessNewTx = ({ navigation, route }) => {
  const [txCreated, setTxCreated] = useState(false);
  const user = useSelector((state) => state);
  const func = async () => {
    const res = await createNewPromise(route.params, user.user.user);
    console.log(res);
  };
  useEffect(() => {
    func();
  }, [user]);

  const [loaded] = useFonts({
    MontserratBold: require("../../../assets/fonts/Montserrat-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {txCreated ? (
        <Text style={styles.titleName}>Done</Text>
      ) : (
        <Text style={styles.titleName}>Paying {route.params.name}</Text>
      )}
      <View style={styles.loaderView}>
        <ActivityIndicator size={120} color="#ffffff" />
      </View>
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
  },
  loaderView: {
    marginTop: 56,
  },
});
export default ProcessNewTx;
