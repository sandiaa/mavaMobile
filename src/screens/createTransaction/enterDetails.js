import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useFonts } from "expo-font";
import DateTimePicker from "@react-native-community/datetimepicker";

import { formatDate } from "../../helpers/formatDate";
import axios from "../../apis/baseURL";

const EnterDetails = ({ navigation, route }) => {
  const [receiverName, setReceiverName] = useState("");
  const [amt, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [paymentMode, setPaymentMode] = useState("");
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [dateSelected, setDateSelected] = useState("");
  const [timeStamp, setTimeStamp] = useState("");

  const onChange = (selectedDate) => {
    setShow(false);
    if (selectedDate != undefined) {
      setTimeStamp(selectedDate.nativeEvent.timestamp);
      setDateSelected(formatDate(selectedDate.nativeEvent.timestamp));
    } else {
      if (dateSelected != "") {
        setTimeStamp(timeStamp);
        setDateSelected(dateSelected);
      }
    }
  };

  const amtRef = useRef();

  useEffect(() => {
    axios
      .get(
        `/getUserId?number=${route.params.data.number.replace(/[^0-9]/g, "")}`
      )
      .then(
        (res) => setReceiverName(res.data.user.name),
        (err) => {}
      );
  }, []);

  const [loaded] = useFonts({
    MontserratSemiBold: require("../../../assets/fonts/Montserrat-SemiBold.ttf"),
    MontserratLight: require("../../../assets/fonts/Montserrat-Light.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const doneButtonPressed = () => {
    const data = {
      name: route.params.data.firstName,
      amount: amt,
      description: description,
      paymentMode: paymentMode,
      dateSelected: timeStamp.toString(),
      receiverNumber: route.params.data.number,
      receiverCurrency: "INR",
      receiverName: receiverName,
    };

    navigation.push("VerifyPin", data);
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.heading}>NEW TRANSACTION</Text>
        <Text style={styles.headerText}>{route.params.data.firstName}</Text>
      </View>
      <Text style={[styles.title, { marginTop: 31 }]}>How much?</Text>
      <View style={styles.amtView}>
        <Text style={styles.currency}>???</Text>
        <TextInput
          style={[styles.textInput, { width: 190, marginLeft: 15 }]}
          value={amt}
          onChangeText={(text) => setAmount(text)}
          keyboardType={"number-pad"}
          maxLength={6}
          ref={amtRef}
        />
      </View>
      <Text style={[styles.title, { marginTop: 20 }]}>For</Text>
      <TextInput
        style={[
          styles.descInput,
          {
            borderBottomColor: "#000000",
            borderBottomWidth: 2,
            width: 240,
          },
        ]}
        value={description}
        onChangeText={(text) => setDescription(text)}
        maxLength={50}
      />
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={[
            styles.button,
            paymentMode == "deliver"
              ? { backgroundColor: "#000000" }
              : { backgroundColor: "#ffffff" },
          ]}
          onPress={() => setPaymentMode("deliver")}
        >
          <Text
            style={[
              styles.buttonText,
              paymentMode == "deliver"
                ? { color: "#ffffff" }
                : { color: "#000000" },
            ]}
          >
            DELIVER
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            { marginLeft: 10 },
            paymentMode == "promise"
              ? { backgroundColor: "#000000" }
              : { backgroundColor: "#ffffff" },
          ]}
          onPress={() => setPaymentMode("promise")}
        >
          <Text
            style={[
              styles.buttonText,
              paymentMode == "promise"
                ? { color: "#ffffff" }
                : { color: "#000000" },
            ]}
          >
            PROMISE
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            { marginLeft: 10 },
            paymentMode == "request"
              ? { backgroundColor: "#000000" }
              : { backgroundColor: "#ffffff" },
          ]}
          onPress={() => setPaymentMode("request")}
        >
          <Text
            style={[
              styles.buttonText,
              paymentMode == "request"
                ? { color: "#ffffff" }
                : { color: "#000000" },
            ]}
          >
            REQUEST
          </Text>
        </TouchableOpacity>
      </View>
      {paymentMode == "promise" ? (
        <View>
          {dateSelected == "" ? (
            <Text style={styles.dateHeader}>
              Set an expiry for your promise
            </Text>
          ) : (
            <Text style={styles.dateHeader}>Expiring On: {dateSelected}</Text>
          )}
          <TouchableOpacity
            style={styles.dateButton}
            onPress={() => setShow(true)}
          >
            {dateSelected == "" ? (
              <Text style={styles.dateButtonText}>set date</Text>
            ) : (
              <Text style={styles.dateButtonText}>Modify date</Text>
            )}
          </TouchableOpacity>
        </View>
      ) : null}

      {show && (
        <DateTimePicker
          value={date}
          mode={"date"}
          display="default"
          onChange={onChange}
          minimumDate={new Date()}
        />
      )}
      <TouchableOpacity
        style={[
          styles.goButton,
          paymentMode == "promise" ? { marginTop: 127 } : { marginTop: 218 },
        ]}
        onPress={() => doneButtonPressed()}
      >
        <Text style={styles.goButtonText}>DONE</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    height: "100%",
  },
  goButton: {
    width: 309,
    height: 64,
    backgroundColor: "#000000",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  goButtonText: {
    fontFamily: "MontserratSemiBold",
    fontSize: 25,
    letterSpacing: 1.88,
    color: "#ffffff",
  },
  dateHeader: {
    fontFamily: "MontserratSemiBold",
    fontSize: 15,
    marginTop: 25,
    alignSelf: "center",
  },
  dateButton: {
    alignSelf: "center",
    marginTop: 15,
  },
  dateButtonText: {
    fontFamily: "MontserratSemiBold",
    fontSize: 18,
    marginTop: 5,
    alignSelf: "center",
    textDecorationLine: "underline",
  },
  buttonText: {
    fontSize: 17,
    letterSpacing: 0.42,
    fontFamily: "MontserratSemiBold",
  },
  button: {
    width: 106,
    height: 52,
    borderWidth: 1,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonView: {
    flexDirection: "row",
    marginTop: 25,
    alignSelf: "center",
    marginHorizontal: 20,
  },
  amtView: {
    width: 240,
    height: 80,
    borderWidth: 1,
    borderColor: "#707070",
    marginTop: 20,
    borderRadius: 25,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  currency: {
    width: 30,
    fontSize: 35,
    letterSpacing: 0.88,
    fontFamily: "MontserratSemiBold",
    textAlign: "center",
    marginLeft: 15,
  },
  descInput: {
    height: 80,
    alignSelf: "center",
    fontSize: 20,
    fontFamily: "MontserratLight",
    textAlign: "center",
  },
  textInput: {
    height: 80,
    alignSelf: "center",
    fontSize: 35,
    letterSpacing: 0.88,
    fontFamily: "MontserratSemiBold",
  },
  title: {
    color: "#000000",
    fontFamily: "MontserratSemiBold",
    fontSize: 25,
    letterSpacing: 0.63,
    textAlign: "center",
  },
  headerView: {
    height: 70,
    backgroundColor: "#000000",
    flexDirection: "row",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    color: "#ffffff",
    fontFamily: "MontserratSemiBold",
    fontSize: 18,
    letterSpacing: 0.45,
  },
  headerText: {
    color: "#ffffff",
    fontFamily: "MontserratSemiBold",
    fontSize: 20,
    letterSpacing: 0.5,
    textDecorationLine: "underline",
  },
});
export default EnterDetails;
