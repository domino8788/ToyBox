import AsyncStorage from '@react-native-community/async-storage';

const key = 'data';

const dataStorage = {
  async get() {
    try {
      const rawData = await AsyncStorage.getItem(key);
      return rawData ? JSON.parse(rawData) : {};
    } catch (e) {
      throw new Error('Failed to load data');
    }
  },
  async set(data) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      throw new Error('Failed to save data');
    }
  },
};

export default dataStorage;
