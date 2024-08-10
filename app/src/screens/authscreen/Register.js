// Register.js
import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView, Alert} from 'react-native';
import {useFormik} from 'formik';
import {FONTS} from '../../../services/fonts';
import {COLORS} from '../../../services/colors';
import CustomHeader from '../../../components/CustomHeader';
import TextInputField from '../../../components/TestInputContainer';
import CustomButton from '../../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {IMAGES} from '../../../services/images';
import {CommonInputStyle} from './Style';
import {useDispatch} from 'react-redux';
import {ValidationSchema} from '../../../services/CommonValidation';
import {RegisterApi, registerUser} from '../../../utils/apiService';
import {setRegisterData} from '../../../redux/slice';

const Register = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {handleChange, handleBlur, handleSubmit, values, errors, touched} =
    useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        nickName: '',
        email: '',
        confirmEmail: '',
        password: '',
        confirmPassword: '',
      },
      validationSchema: ValidationSchema,
      onSubmit: async values => {
        console.log('here');
        const {firstName, lastName, nickName, email, password} = values;
        navigation.navigate('ActivateAccount', {userId: '123456'});
        await RegisterApi(
          firstName,
          lastName,
          nickName,
          email,
          password,
          dispatch,
          (result, status) => {
            if (result != null && status) {
              dispatch(setRegisterData(result));
              Alert.alert('Registration Success', result.message);
              navigation.navigate('ActivateAccount', {
                userId: result.data.user_id,
              });
            }
          },
        );
      },
    });

  return (
    <View style={styles.container}>
      <CustomHeader label={'Register'} />
      <Text style={styles.title}>Create an Account</Text>
      <ScrollView>
        <View style={styles.formContainer}>
          <TextInputField
            label={'First Name'}
            value={values.firstName}
            onChangeText={handleChange('firstName')}
            onBlur={handleBlur('firstName')}
            placeholder={''}
            error={touched.firstName && errors.firstName}
            inputStyle={CommonInputStyle.inputStyle}
            placeholderTextColor={CommonInputStyle.placeholderTextColor}
            selectionColor={CommonInputStyle.selectionColor}
            labelStyle={CommonInputStyle.labelStyle}
            labelTextStyle={CommonInputStyle.labelTextStyle}
          />
          {touched.firstName && errors.firstName && (
            <Text style={styles.errorText}>{errors.firstName}</Text>
          )}

          <TextInputField
            label={'Last Name'}
            value={values.lastName}
            onChangeText={handleChange('lastName')}
            onBlur={handleBlur('lastName')}
            placeholder={''}
            error={touched.lastName && errors.lastName}
            inputStyle={CommonInputStyle.inputStyle}
            placeholderTextColor={CommonInputStyle.placeholderTextColor}
            selectionColor={CommonInputStyle.selectionColor}
            labelStyle={CommonInputStyle.labelStyle}
            labelTextStyle={CommonInputStyle.labelTextStyle}
          />
          {touched.lastName && errors.lastName && (
            <Text style={styles.errorText}>{errors.lastName}</Text>
          )}

          <TextInputField
            label={'Nick Name'}
            value={values.nickName}
            onChangeText={handleChange('nickName')}
            onBlur={handleBlur('nickName')}
            placeholder={''}
            error={touched.nickName && errors.nickName}
            inputStyle={CommonInputStyle.inputStyle}
            placeholderTextColor={CommonInputStyle.placeholderTextColor}
            selectionColor={CommonInputStyle.selectionColor}
            labelStyle={CommonInputStyle.labelStyle}
            labelTextStyle={CommonInputStyle.labelTextStyle}
          />
          {touched.nickName && errors.nickName && (
            <Text style={styles.errorText}>{errors.nickName}</Text>
          )}

          <TextInputField
            label={'Email Address'}
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            placeholder={''}
            error={touched.email && errors.email}
            inputStyle={CommonInputStyle.inputStyle}
            placeholderTextColor={CommonInputStyle.placeholderTextColor}
            selectionColor={CommonInputStyle.selectionColor}
            labelStyle={CommonInputStyle.labelStyle}
            labelTextStyle={CommonInputStyle.labelTextStyle}
          />
          {touched.email && errors.email && (
            <Text style={styles.errorText}>{errors.email}</Text>
          )}

          <TextInputField
            label={'Confirm Email Address'}
            value={values.confirmEmail}
            onChangeText={handleChange('confirmEmail')}
            onBlur={handleBlur('confirmEmail')}
            placeholder={''}
            error={touched.confirmEmail && errors.confirmEmail}
            inputStyle={CommonInputStyle.inputStyle}
            placeholderTextColor={CommonInputStyle.placeholderTextColor}
            selectionColor={CommonInputStyle.selectionColor}
            labelStyle={CommonInputStyle.labelStyle}
            labelTextStyle={CommonInputStyle.labelTextStyle}
          />
          {touched.confirmEmail && errors.confirmEmail && (
            <Text style={styles.errorText}>{errors.confirmEmail}</Text>
          )}

          <View style={styles.containerInput}>
            <TextInputField
              label={'Password'}
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              placeholder={''}
              error={touched.password && errors.password}
              secureTextEntry={true}
              inputStyle={CommonInputStyle.inputStyle}
              placeholderTextColor={CommonInputStyle.placeholderTextColor}
              selectionColor={CommonInputStyle.selectionColor}
              labelStyle={CommonInputStyle.labelStyle}
              labelTextStyle={CommonInputStyle.labelTextStyle}
            />
            {touched.password && errors.password && (
              <Text style={styles.passwordError}>{errors.password}</Text>
            )}

            <Image
              style={styles.image}
              source={IMAGES.Email}
              accessibilityLabel="Email Icon"
            />
          </View>

          <TextInputField
            label={'Confirm Password'}
            value={values.confirmPassword}
            onChangeText={handleChange('confirmPassword')}
            onBlur={handleBlur('confirmPassword')}
            placeholder={''}
            error={touched.confirmPassword && errors.confirmPassword}
            inputStyle={CommonInputStyle.inputStyle}
            placeholderTextColor={CommonInputStyle.placeholderTextColor}
            selectionColor={CommonInputStyle.selectionColor}
            labelStyle={CommonInputStyle.labelStyle}
            labelTextStyle={CommonInputStyle.labelTextStyle}
          />
          {touched.confirmPassword && errors.confirmPassword && (
            <Text style={styles.errorText}>{errors.confirmPassword}</Text>
          )}
        </View>
        <Text style={styles.termsText}>
          By creating an account you agree to the Terms of Service and Privacy
          Policy
        </Text>
        <CustomButton
          label={'Create an Account'}
          onPress={handleSubmit}
          Buttonstyle={styles.Buttonstyle}
        />
        <View style={styles.loginPrompt}>
          <Text style={{color: COLORS.white}}>
            Already have an account?
            <Text
              onPress={() => navigation.navigate('LoginScreen')}
              style={{color: COLORS.primary}}>
              {' '}
              Login
            </Text>
          </Text>
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
  title: {
    color: COLORS.primary,
    marginTop: 20,
    marginLeft: 15,
    fontSize: 20,
    fontFamily: FONTS.Mulish_Bold,
  },
  formContainer: {
    alignItems: 'center',
    marginTop: 15,
  },
  containerInput: {
    position: 'relative',
    marginBottom: 15, // Adjust as needed
  },
  image: {
    position: 'absolute',
    height: 20,
    width: 20,
    top: '50%',
    right: 15,
    transform: [{translateY: -10}],
    zIndex: 2, // Ensure the image is above the text
  },
  termsText: {
    color: COLORS.white,
    marginTop: 20,
    textAlign: 'center',
  },
  Buttonstyle: {
    // Add your button styles here
  },
  loginPrompt: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
    alignSelf: 'flex-start',
    marginLeft: 15,
  },
  passwordError: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
});

export default Register;
