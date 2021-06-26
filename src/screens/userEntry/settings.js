import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";

import { removeUser } from "../../helpers/storeUser";

const Settings = ({ navigation }) => {
  const logout = async () => {
    const removed = await removeUser();
    if (removed) {
      navigation.push("Landing");
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#000000"} />
      <View style={styles.header} />
      <TouchableOpacity style={styles.logout} onPress={() => logout()}>
        <Text style={styles.text}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#ffffff",
  },
  header: {
    height: 15,
    backgroundColor: "#000000",
  },
  logout: {
    backgroundColor: "#ffffff",
    borderBottomColor: "#f2f2f2",
    borderBottomWidth: 2,
    height: 70,
    justifyContent: "center",
  },
  text: {
    marginHorizontal: 30,
    fontSize: 20,
  },
});
export default Settings;
