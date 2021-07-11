import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

import TxDisplayBlock from "./txDisplayBlock";

const PromisesScreen = ({ navigation, data }) => {
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
              <Text>
                You have not promised yet! click the icon below to create.
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
});

export default PromisesScreen;
