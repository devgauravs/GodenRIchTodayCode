import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {FONTS} from '../../../services/fonts';
import {COLORS} from '../../../services/colors';
import CustomHeader from '../../../components/CustomHeader';
import TextInputField from '../../../components/TestInputContainer';
import {moderateScale} from 'react-native-size-matters';
import CustomButton from '../../../components/CustomButton';
import {ScrollView} from 'react-native-gesture-handler';
import {IMAGES} from '../../../services/images';
import {useNavigation, useRoute} from '@react-navigation/native';
import {LoginTodos} from '../../../redux/slice';
import {useDispatch, useSelector} from 'react-redux';
import {CommonInputStyle} from './Style';
import {Formik, useFormik} from 'formik';
import * as Yup from 'yup';
import {
  ResetSchema,
} from '../../../services/CommonValidation';
import { ResetApi } from '../../../utils/apiService';

const ResetPassword = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();
  const {handleChange, handleBlur, handleSubmit, values, errors, touched} =
    useFormik({
      initialValues: {
        newPassword: '',
        confirmPassword: '',
      },
      validationSchema: ResetSchema,
      onSubmit: async values => {
        console.log(values);
        const{userId,resetKey} = route.params
        console.log(userId,resetKey)
        await ResetApi(userId, resetKey, values.newPassword,dispatch, (result, status) => {
          if (result != null && status) {
            Alert.alert("Reset Success",result.message)
            navigation.navigate('LoginScreen');
          }
        });
      },
    });
  return (
    <View style={styles.container}>
      {/* <CustomHeader label={'Login'} showBackButton={false} /> */}
      <CustomHeader label={'Reset Password'} />
      <Text style={styles.headerText}>Reset Password</Text>
      <Text style={styles.descriptionText}>
        Please enter your email address. You will receive an email with
        instructions on how to reset your password.
      </Text>
      <ScrollView>
        <View style={{alignItems: 'center', marginTop: moderateScale(15)}}>
          {/* <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <View>
                <TextInputField
                  label={'Email Address'}
                  placeholder={''}
                  {...CommonInputStyle}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                {touched.email && errors.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}
                <TextInputField
                  label={'Password'}
                  placeholder={''}
                  {...CommonInputStyle}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
                {touched.password && errors.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}

                <View
                  style={{
                    gap: moderateScale(100),
                    flexDirection: 'row',
                    marginTop: moderateScale(20),
                  }}
                >
                  <View style={{ flexDirection: 'row', gap: 10 }}>
                    <Image
                      source={IMAGES.MessageIMg}
                      style={{ height: 30, width: 30, resizeMode: 'contain' }}
                    />
                    <Text style={{ color: COLORS.white }}>Remember Me</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('ForgotPassword')}
                  >
                    <Text style={{ color: COLORS.primary }}>Forgot Password ?</Text>
                  </TouchableOpacity>
                </View>

                <CustomButton
                  label={'Login'}
                  onPress={handleSubmit}
                  ButtonStyle={{ marginTop: moderateScale(50) }}
                />
              </View>
            )}
          </Formik> */}

          <TextInputField
            label={'New Password'}
            value={values.newPassword}
            onChangeText={handleChange('newPassword')}
            onBlur={handleBlur('newPassword')}
            placeholder={''}
            inputStyle={{width: moderateScale(320)}}
            placeholderTextColor={COLORS.white}
            selectisonColor={COLORS.white}
            labelStyle={styles.labelStyle}
            labelTextStyle={styles.labelTextStyle}
            error={touched.newPassword && errors.newPassword}
          />
          {touched.newPassword && errors.newPassword && (
            <Text style={styles.errorText}>{errors.newPassword}</Text>
          )}

          <TextInputField
            label={'Re- Enter Password'}
            value={values.confirmPassword}
            onChangeText={handleChange('confirmPassword')}
            onBlur={handleBlur('confirmPassword')}
            placeholder={''}
            inputStyle={{width: moderateScale(320)}}
            placeholderTextColor={COLORS.white}
            selectisonColor={COLORS.white}
            labelStyle={styles.labelStyle}
            labelTextStyle={styles.labelTextStyle}
            error={touched.confirmPassword && errors.confirmPassword}
          />
          {touched.confirmPassword && errors.confirmPassword && (
            <Text style={styles.errorText}>{errors.confirmPassword}</Text>
          )}
<CustomButton
            label={'Generate Password'}
            onPress={handleSubmit}
            Buttonstyle={{marginTop: moderateScale(50)}}
          />
          {/* <View
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
          </View> */}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  headerText: {
    color: COLORS.primary,
    marginTop: moderateScale(20),
    marginLeft: moderateScale(15),
    fontSize: moderateScale(20),
    fontFamily: FONTS.Mulish_Bold,
  },
  descriptionText: {
    color: COLORS.white,
    marginTop: moderateScale(15),
    paddingHorizontal: moderateScale(17),
  },
  errorText: {
    color: 'red',
    fontSize: moderateScale(12),
    marginLeft: moderateScale(15),
    marginTop: moderateScale(5),
  },
});

export default ResetPassword;
