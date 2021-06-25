import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/screens/Home/homeScreen";
import NumberInput from "./src/screens/userEntry/numberInput";
import OtpInput from "./src/screens/userEntry/otpInput";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NumberInput">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="NumberInput"
          component={NumberInput}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="OtpInput"
          component={OtpInput}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});
export default App;
