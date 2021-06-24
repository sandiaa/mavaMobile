import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Modal,
} from "react-native";
import { useFonts } from "expo-font";

import Logo from "../../images/logo/logo.svg";

const NumberInput = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [countryCodeSelected, setCountryCodeSelected] = useState("91");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [loaded] = useFonts({
    MontserratExtraBold: require("../../../assets/fonts/Montserrat-ExtraBold.ttf"),
    MontserratLight: require("../../../assets/fonts/Montserrat-Light.ttf"),
    MontserratSemiBold: require("../../../assets/fonts/Montserrat-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const goButtonPressed = () => {
    const number = countryCodeSelected + phoneNumber;
    console.log(number);
  };

  return (
    <ScrollView style={styles.scrollView}>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <ScrollView>
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.countryCodeStyle}
              onPress={() => {
                setModalVisible(false);
                setCountryCodeSelected("91");
              }}
            >
              <Text style={styles.countryCodeText}>+91</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.countryCodeStyle}
              onPress={() => {
                setModalVisible(false);
                setCountryCodeSelected("44");
              }}
            >
              <Text style={styles.countryCodeText}>+44</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Modal>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Logo width={"100%"} height={"100%"} />
        </View>
        <Text style={styles.heading}>Money As We Act</Text>
        <Text style={styles.description}>Making promises can't be easier.</Text>
        <View style={styles.textInputView}>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.countryCode}
          >
            <Text style={styles.countryCodeText}>+{countryCodeSelected}</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.textInput}
            maxLength={10}
            keyboardType={"number-pad"}
            onChangeText={(text) => setPhoneNumber(text)}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => goButtonPressed()}
        >
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#ffffff",
    height: "100%",
  },
  modalContainer: {
    backgroundColor: "#ffffff",
    marginTop: 450,
    marginLeft: 58,
    flexDirection: "column",
    width: 60,
    height: 80,
  },
  container: {
    alignItems: "center",
  },
  logo: {
    height: 100,
    width: 100,
    marginTop: 113,
  },
  heading: {
    fontFamily: "MontserratExtraBold",
    fontSize: 25,
    height: 30,
    marginTop: 10,
  },
  description: {
    fontFamily: "MontserratLight",
    fontSize: 25,
    marginTop: 46,
    textAlign: "center",
  },
  textInputView: {
    width: 309,
    height: 74,
    marginTop: 202,
    elevation: 3,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderColor: "#707070",
    borderWidth: 0.3,
    flexDirection: "row",
  },
  textInput: {
    height: 42,
    width: 145,
    fontSize: 20,
    fontFamily: "MontserratSemiBold",
    letterSpacing: 2,
    marginLeft: 20,
    textAlign: "left",
    marginTop: 15,
  },
  countryCode: {
    height: 42,
    width: 50,
    marginLeft: 18,
    justifyContent: "center",
    marginTop: 15,
  },
  countryCodeText: {
    fontSize: 20,
    fontFamily: "MontserratSemiBold",
    letterSpacing: 2,
    color: "#000000",
  },
  countryCodeStyle: {
    height: 40,
  },
  button: {
    width: 309,
    height: 64,
    marginTop: 37,
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
export default NumberInput;
