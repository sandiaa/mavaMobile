import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import * as Contacts from "expo-contacts";
import { formatContact } from "../../helpers/formatContacts";
import { useFonts } from "expo-font";

import SearchIcon from "../../images/icons/searchIcon.svg";
import ContactBlock from "./contactBlock";

const ChooseContact = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [inMemoryList, setInMemoryList] = useState([]);
  const [contactList, setContactList] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });
        const list = formatContact(data);
        setContactList(list);
        setInMemoryList(list);
        setIsLoading(false);
      }
    })();
    return () => {
      setContactList([]);
      setInMemoryList([]);
      setIsLoading(false);
    };
  }, []);

  const [loaded] = useFonts({
    MontserratExtraBold: require("../../../assets/fonts/Montserrat-ExtraBold.ttf"),
    MontserratSemiBold: require("../../../assets/fonts/Montserrat-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  const renderItem = ({ item }) => (
    <ContactBlock item={item} navigation={navigation} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>SELECT A CONTACT</Text>
        <TouchableOpacity style={styles.searchIcon}>
          <SearchIcon height="100%" width={"100%"} />
        </TouchableOpacity>
      </View>
      {isLoading ? (
        <View style={styles.activityIndicator}>
          <ActivityIndicator size={"large"} color="#000000" />
        </View>
      ) : (
        <View style={styles.flatListView}>
          <FlatList
            style={{ height: "90%" }}
            data={contactList}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={() => {
              return <View style={styles.itemSeperator} />;
            }}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    height: "100%",
  },
  flatListView: {
    marginTop: 21,
    alignItems: "center",
  },
  activityIndicator: {
    marginTop: 60,
  },
  itemSeperator: {
    height: 10,
  },
  headerView: {
    height: 40,
    backgroundColor: "#000000",
    flexDirection: "row",
    justifyContent: "center",
  },
  headerText: {
    color: "#ffffff",
    left: 75,
    fontFamily: "MontserratSemiBold",
    fontSize: 18,
    letterSpacing: 0.45,
    width: "80%",
  },
  searchIcon: {
    width: 30,
    height: 30,
  },
});
export default ChooseContact;
