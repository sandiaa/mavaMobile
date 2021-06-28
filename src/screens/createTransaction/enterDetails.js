import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EnterDetails = ({ route }) => {
  console.log(route.params);
  return (
    <View>
      <Text>enter details here</Text>
    </View>
  );
};
const styles = StyleSheet.create({});

export default EnterDetails;
