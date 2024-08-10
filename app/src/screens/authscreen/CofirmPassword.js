import React, {useEffect} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import {FONTS} from '../../../services/fonts';
import {COLORS} from '../../../services/colors';
import CustomHeader from '../../../components/CustomHeader';
import TextInputField from '../../../components/TestInputContainer';
import {moderateScale, scale} from 'react-native-size-matters';
import CustomButton from '../../../components/CustomButton';
import {ScrollView} from 'react-native-gesture-handler';
import {IMAGES} from '../../../services/images';
import {useNavigation, useRoute} from '@react-navigation/native';

const CofirmPassword = () => {
  const navigation = useNavigation();
  const route = useRoute();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('ResetPassword', {
        userId: route.params.userId,
        resetKey: route.params.resetKey,
      });
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <CustomHeader lable={'CofirmPassword'} />
      <Text
        style={{
          color: COLORS.primary,
          marginTop: moderateScale(20),
          marginLeft: moderateScale(15),
          fontSize: moderateScale(20),
          fontFamily: FONTS.Mulish_Bold,
        }}>
        Login{' '}
      </Text>
      <Text
        style={{
          color: COLORS.white,
          marginTop: moderateScale(10),
          paddingHorizontal: moderateScale(17),
        }}>
        {
          'Please click the confirmation link in the email and visit the login page.'
        }
      </Text>

      <ScrollView>
        <View style={{alignItems: 'center', marginTop: moderateScale(35)}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ResetPassword')}>
            <Image style={{height: 150, width: 150}} source={IMAGES.Email} />
          </TouchableOpacity>

          {/* <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '20%',
            }}>
            <Image
              source={IMAGES.MessageIMg}
              style={{height: 30, width: 30, resizeMode: 'contain'}}
            />
            <Text style={{color: COLORS.white, marginLeft: moderateScale(10)}}>
              English (United States)
            </Text>
            <Text
              onPress={() => Alert.alert('change')}
              style={{
                color: COLORS.primary,
                marginLeft: moderateScale(25),
                fontSize: 16,
              }}>
              Change
            </Text>
          </View> */}
        </View>
      </ScrollView>
      <Text
        style={{
          color: COLORS.white,
          marginBottom: moderateScale(20),
          textAlign: 'center',
          fontSize: 18,
        }}>
        {'Terms of Service and Privacy Policy'}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  logo: {height: 50, width: 50, resizeMode: 'contain'},
  backIcon: {height: 20, width: 20, resizeMode: 'contain'},
});

export default CofirmPassword;
