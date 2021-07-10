import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Provider } from "react-redux";
import rootReducer from "./src/redux/store/store";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import HomeScreen from "./src/screens/Home/homeScreen";
import NumberInput from "./src/screens/userEntry/numberInput";
import OtpInput from "./src/screens/userEntry/otpInput";
import PinInput from "./src/screens/userEntry/pinInput";
import Landing from "./src/screens/userEntry/landing";
import Settings from "./src/screens/userEntry/settings";
import SelectContact from "./src/screens/createTransaction/selectContact";
import EnterDetails from "./src/screens/createTransaction/enterDetails";
import CreateNewTx from "./src/screens/payment/createNewTx";
import VerifyPin from "./src/screens/payment/verifyPin";

const Stack = createStackNavigator();
const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen
            name="VerifyPin"
            component={VerifyPin}
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
            name="CreateNewTx"
            component={CreateNewTx}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="EnterDetails"
            component={EnterDetails}
            options={{
              headerStyle: {
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
                backgroundColor: "#000000",
                height: 30,
              },
              headerTintColor: "#ffffff",
              title: "",
            }}
          />
          <Stack.Screen
            name="SelectContact"
            component={SelectContact}
            options={{
              headerStyle: {
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
                backgroundColor: "#000000",
                height: 30,
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
    </Provider>
  );
};

const styles = StyleSheet.create({});
export default App;
