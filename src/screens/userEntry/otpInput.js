import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useFonts } from "expo-font";
import axios from "../../apis/baseURL";

import Logo from "../../images/logo/logo.svg";

const OtpInput = ({ route }) => {
  const [pw1, setPw1] = useState("");
  const [pw2, setPw2] = useState("");
  const [pw3, setPw3] = useState("");
  const [pw4, setPw4] = useState("");

  const pw1Ref = useRef();
  const pw2Ref = useRef();
  const pw3Ref = useRef();
  const pw4Ref = useRef();

  useEffect(() => {
    axios.get(`/getUserId?number=${route.params.phoneNumber}`).then(
      (res) => {
        console.log(res.data);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  const [loaded] = useFonts({
    MontserratExtraBold: require("../../../assets/fonts/Montserrat-ExtraBold.ttf"),
    MontserratSemiBold: require("../../../assets/fonts/Montserrat-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const goButtonPressed = () => {
    const otp = pw1 + pw2 + pw3 + pw4;
    console.log(otp);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Logo width={"100%"} height={"100%"} />
      </View>
      <Text style={styles.heading}>Let's Verify you</Text>
      <View style={styles.pwView}>
        <TextInput
          style={styles.pw}
          maxLength={1}
          keyboardType={"number-pad"}
          ref={pw1Ref}
          onChangeText={(text) => {
            setPw1(text);
            text ? pw2Ref.current.focus() : null;
          }}
        />
        <TextInput
          style={styles.pw}
          maxLength={1}
          keyboardType={"number-pad"}
          ref={pw2Ref}
          onChangeText={(text) => {
            setPw2(text);
            text ? pw3Ref.current.focus() : null;
          }}
        />
        <TextInput
          style={styles.pw}
          maxLength={1}
          keyboardType={"number-pad"}
          ref={pw3Ref}
          onChangeText={(text) => {
            setPw3(text);
            text ? pw4Ref.current.focus() : null;
          }}
        />
        <TextInput
          style={styles.pw}
          maxLength={1}
          keyboardType={"number-pad"}
          ref={pw4Ref}
          onChangeText={(text) => {
            setPw4(text);
          }}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => goButtonPressed()}>
        <Text style={styles.buttonText}>GO</Text>
      </TouchableOpacity>
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
    marginTop: 60,
  },
  heading: {
    marginTop: 30,
    fontFamily: "MontserratSemiBold",
    fontSize: 25,
    letterSpacing: 2.5,
  },
  pwView: {
    flexDirection: "row",
    marginTop: 42,
    width: 250,
    justifyContent: "space-evenly",
  },
  pw: {
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
export default OtpInput;
