import AsyncStorage from '@react-native-async-storage/async-storage';

const TokenKey = 'TokenKey';
const RememberMeKey = 'RememberMeKey';
const UserDetailsKey = 'UserDetailsKey';

export const setToken = async data => {
  await AsyncStorage.setItem(TokenKey, data);
};
export const getToken = async () => {
  const result = await AsyncStorage.getItem(TokenKey);
  if (result != null && result != undefined && result != '') {
    return result;
  } else {
    return '';
  }
};

export const setRememberMe = async data => {
  await AsyncStorage.setItem(RememberMeKey, JSON.stringify(data));
};
export const getRememberMe = async () => {
  const result = await AsyncStorage.getItem(RememberMeKey);
  if (result != null && result != undefined && result != '') {
    return JSON.parse(result);
  } else {
    return '';
  }
};

export const setUserDetails = async data => {
  await AsyncStorage.setItem(UserDetailsKey, JSON.stringify(data));
};
export const getUserDetails = async () => {
  const result = await AsyncStorage.getItem(UserDetailsKey);
  if (result != null && result != undefined && result != '') {
    return JSON.parse(result);
  } else {
    return '';
  }
};
