import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/screens/Home/homeScreen";
import NumberInput from "./src/screens/userEntry/numberInput";
import OtpInput from "./src/screens/userEntry/otpInput";
import PinInput from "./src/screens/userEntry/pinInput";
import Landing from "./src/screens/userEntry/landing";
import Settings from "./src/screens/userEntry/settings";
import ChooseContact from "./src/screens/createTransaction/chooseContact";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="ChooseContact"
          component={ChooseContact}
          options={{
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
              backgroundColor: "#000000",
            },
            headerTintColor: "#ffffff",
            title: "",
          }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
              backgroundColor: "#000000",
            },
            headerTintColor: "#ffffff",
            title: "Settings",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
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
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
            title: "",
          }}
        />
        <Stack.Screen
          name="PinInput"
          component={PinInput}
          options={{
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
            title: "",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});
export default App;
