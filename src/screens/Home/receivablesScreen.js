import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { useFonts } from "expo-font";

import TxDisplayBlock from "../txDisplay/txDisplayBlock";

const ReceivablesScreen = ({ navigation, data }) => {
  const [loaded] = useFonts({
    MontserratSemiBold: require("../../../assets/fonts/Montserrat-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  const renderItem = ({ item }) => (
    <TxDisplayBlock item={item} navigation={navigation} />
  );
  return (
    <View style={styles.mainView}>
      <FlatList
        style={{ height: "90%" }}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => {
          return <View style={styles.itemSeperator} />;
        }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => {
          return (
            <View>
              <Text style={styles.noPromises}>
                You do not have any receivables yet!
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    alignItems: "center",
  },
  itemSeperator: {
    height: 18,
  },
  noPromises: {
    fontFamily: "MontserratBold",
    fontSize: 15,
    textAlign: "center",
    marginTop: 150,
  },
});

export default ReceivablesScreen;
