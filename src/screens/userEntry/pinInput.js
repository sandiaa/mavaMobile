import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { useFonts } from "expo-font";
import axios from "../../apis/baseURL";
import { v4 as uuidv4 } from "uuid";
import "react-native-get-random-values";

import Logo from "../../images/logo/logo.svg";
import { storeUser } from "../../helpers/storeUser";

const PinInput = ({ route, navigation }) => {
  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);

  const pin1Ref = useRef();
  const pin2Ref = useRef();
  const pin3Ref = useRef();
  const pin4Ref = useRef();

  const [loaded] = useFonts({
    MontserratExtraBold: require("../../../assets/fonts/Montserrat-ExtraBold.ttf"),
    MontserratSemiBold: require("../../../assets/fonts/Montserrat-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const goButtonPressed = () => {
    if (pin1 != "" && pin2 != "" && pin3 != "" && pin4 != "") {
      setCreatingUser(true);
      const pin = pin1 + pin2 + pin3 + pin4;
      axios
        .post("/createUser", {
          id: uuidv4(),
          number: route.params.phoneNumber,
          pin: pin,
        })
        .then(
          async (res) => {
            const stored = await storeUser(route.params.phoneNumber);
            stored ? navigation.push("Home") : null;
          },
          (err) => {}
        );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Logo width={"100%"} height={"100%"} />
      </View>
      <Text style={styles.heading}>Set your 4- digit transaction pin</Text>
      <View style={styles.pinView}>
        <TextInput
          style={styles.pin}
          maxLength={1}
          keyboardType={"number-pad"}
          ref={pin1Ref}
          onChangeText={(text) => {
            setPin1(text);
            text ? pin2Ref.current.focus() : null;
          }}
        />
        <TextInput
          style={styles.pin}
          maxLength={1}
          keyboardType={"number-pad"}
          ref={pin2Ref}
          onChangeText={(text) => {
            setPin2(text);
            text ? pin3Ref.current.focus() : null;
          }}
        />
        <TextInput
          style={styles.pin}
          maxLength={1}
          keyboardType={"number-pad"}
          ref={pin3Ref}
          onChangeText={(text) => {
            setPin3(text);
            text ? pin4Ref.current.focus() : null;
          }}
        />
        <TextInput
          style={styles.pin}
          maxLength={1}
          keyboardType={"number-pad"}
          ref={pin4Ref}
          onChangeText={(text) => {
            setPin4(text);
          }}
        />
      </View>

      {creatingUser ? (
        <View style={styles.button}>
          <ActivityIndicator size={"large"} color="#ffffff" />
        </View>
      ) : (
        <TouchableOpacity
          style={styles.button}
          onPress={() => goButtonPressed()}
        >
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
    backgroundColor: "#ffffff",
  },
  logo: {
    height: 100,
    width: 100,
    marginTop: 10,
  },
  heading: {
    marginTop: 30,
    fontFamily: "MontserratSemiBold",
    fontSize: 25,
    letterSpacing: 2.5,
    textAlign: "center",
  },
  pinView: {
    flexDirection: "row",
    marginTop: 35,
    width: 250,
    justifyContent: "space-evenly",
  },
  pin: {
    height: 50,
    width: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#707070",
    elevation: 3,
    backgroundColor: "#ffffff",
    textAlign: "center",
    fontSize: 18,
    fontFamily: "MontserratExtraBold",
  },
  button: {
    width: 309,
    height: 64,
    marginTop: 32,
    backgroundColor: "#000000",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: "MontserratSemiBold",
    fontSize: 25,
    letterSpacing: 1.88,
    color: "#ffffff",
  },
});

export default PinInput;
