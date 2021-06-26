import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@user";

export const storeUser = async (user) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, user);
    return true;
  } catch (e) {
    return false;
  }
};

export const fetchUser = async () => {
  try {
    const user = await AsyncStorage.getItem(STORAGE_KEY);

    if (user !== null) {
      return user;
    }
  } catch (e) {
    return null;
  }
};

export const removeUser = async () => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (e) {
    return false;
  }
};
