import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { fetchUser } from "../../helpers/storeUser";

import Logo from "../../images/logo/logo.svg";

const Landing = ({ navigation }) => {
  const getUser = async () => {
    const user = await fetchUser();
    if (user !== undefined) {
      navigation.push("Home");
    } else {
      navigation.push("NumberInput");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <View style={styles.container}>
      <Logo width={"20%"} height={"20%"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#ffffff",
  },
});
export default Landing;
