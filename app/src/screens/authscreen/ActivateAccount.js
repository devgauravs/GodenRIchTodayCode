import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, Image, Alert} from 'react-native';
import {FONTS} from '../../../services/fonts';
import {COLORS} from '../../../services/colors';
import CustomHeader from '../../../components/CustomHeader';
import TextInputField from '../../../components/TestInputContainer';
import {moderateScale, scale} from 'react-native-size-matters';
import CustomButton from '../../../components/CustomButton';
import {ScrollView} from 'react-native-gesture-handler';
import {IMAGES} from '../../../services/images';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {useFormik} from 'formik';
import {activationSchema} from '../../../services/CommonValidation';
import {ActivationApi} from '../../../utils/apiService';

const ActivateAccount = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {handleChange, handleBlur, handleSubmit, values, errors, touched} =
    useFormik({
      initialValues: {
        activationKey: '',
      },
      validationSchema: activationSchema,
      onSubmit: async values => {
        const {activationKey} = values;
        await ActivationApi(
          route.params.userId,
          activationKey,
          dispatch,
          (result, status) => {
            if (result != null && status) {
              Alert.alert('Activation Success', result.message);
              navigation.navigate('Login');
            }
          },
        );
      },
    });

  return (
    <View style={styles.container}>
      <CustomHeader lable={'Active Account'} />
      <Text
        style={{
          color: COLORS.primary,
          marginTop: moderateScale(20),
          marginLeft: moderateScale(15),
          fontSize: moderateScale(20),
          fontFamily: FONTS.Mulish_Bold,
        }}>
        Activate your account{' '}
      </Text>
      <Text
        style={{
          color: COLORS.white,
          marginTop: moderateScale(20),
          marginLeft: moderateScale(15),
          fontSize: moderateScale(16),
          // fontFamily: FONTS.Mulish_Bold,
        }}>
        Please provide a valid activation key.
      </Text>
      <ScrollView>
        <View style={{alignItems: 'center', marginTop: moderateScale(15)}}>
          <View>
            <TextInputField
              label={'Enable key'}
              placeholder={''}
              inputStyle={{width: moderateScale(320)}}
              placeholderTextColor={COLORS.white}
              selectisonColor={COLORS.white}
              labelStyle={styles.labelStyle}
              error={touched.activationKey && errors.activationKey}
              labelTextStyle={styles.labelTextStyle}
              onChangeText={handleChange('activationKey')}
              value={values.activationKey}
            />
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.activationKey}</Text>
            )}
          </View>
          <CustomButton
            label={'Enable'}
            onPress={handleSubmit}
            ButtonStyle={{marginTop: moderateScale(50)}}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: moderateScale(25),
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
          </View>
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

export default ActivateAccount;
