import React from 'react';
import {View, Text, Button, StyleSheet, Image, Alert} from 'react-native';
import {FONTS} from '../../../services/fonts';
import {COLORS} from '../../../services/colors';
import CustomHeader from '../../../components/CustomHeader';
import TextInputField from '../../../components/TestInputContainer';
import {moderateScale} from 'react-native-size-matters';
import CustomButton from '../../../components/CustomButton';
import {ScrollView} from 'react-native-gesture-handler';
import {IMAGES} from '../../../services/images';
import {useNavigation} from '@react-navigation/native';
import {useFormik} from 'formik'; // Import Formik
import {ValidationSchema} from '../../../services/CommonValidation'; // Import your validation schema
import * as Yup from 'yup'; // Import Yup
import {ForgotApi} from '../../../utils/apiService';
import {useDispatch} from 'react-redux';

const ForgotPassword = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {handleChange, handleBlur, handleSubmit, values, errors, touched} =
    useFormik({
      initialValues: {
        email: '',
      },
      validationSchema: Yup.object().shape({
        email: ValidationSchema.fields.email, // Use the email validation from the schema
      }),
      onSubmit: async values => {
        console.log(values);
        await ForgotApi(values.email, dispatch, (result, status) => {
          if (result != null && status) {
            navigation.navigate('CofirmPassword',{userId: result.data.user_id,resetKey: result.data.reset_key});
          }
        });
        // navigation.navigate('CofirmPassword');
      },
    });

  return (
    <View style={styles.container}>
      <CustomHeader label={'Forgot Password'} />
      <Text style={styles.headerText}>Forgot your password</Text>
      <Text style={styles.descriptionText}>
        Please enter your email address. You will receive an email with
        instructions on how to reset your password.
      </Text>

      <ScrollView>
        <View style={styles.formContainer}>
          <TextInputField
            label={'Email Address'}
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            placeholder={''}
            inputStyle={{width: moderateScale(320)}}
            placeholderTextColor={COLORS.white}
            selectisonColor={COLORS.white}
            labelStyle={styles.labelStyle}
            labelTextStyle={styles.labelTextStyle}
            error={touched.email && errors.email}
          />
          {touched.email && errors.email && (
            <Text style={styles.errorText}>{errors.email}</Text>
          )}

          <CustomButton
            label={'Request Reset Link'}
            onPress={handleSubmit}
            Buttonstyle={{marginTop: moderateScale(50)}}
          />
          <Text onPress={()=>navigation.goBack()} style={styles.returnToLogin}>Return to Login</Text>

          {/* <View style={styles.footer}>
            <Image source={IMAGES.MessageIMg} style={styles.footerImage} />
            <Text style={styles.footerText}>English (United States)</Text>
            <Text
              onPress={() => Alert.alert('Change language')}
              style={styles.changeText}>
              Change
            </Text>
          </View> */}
        </View>
      </ScrollView>
      <Text style={styles.termsText}>Terms of Service and Privacy Policy</Text>
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
  formContainer: {
    alignItems: 'center',
    marginTop: moderateScale(15),
  },
  labelStyle: {
    // Add your label styles here
  },
  labelTextStyle: {
    // Add your label text styles here
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginVertical: 6,
    alignSelf: 'flex-start',
    left: 30,
  },
  returnToLogin: {
    textAlign: 'center',
    marginTop: moderateScale(10),
    color: COLORS.whiteLight,
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20%',
  },
  footerImage: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  footerText: {
    color: COLORS.white,
    marginLeft: moderateScale(10),
  },
  changeText: {
    color: COLORS.primary,
    marginLeft: moderateScale(25),
    fontSize: 16,
  },
  termsText: {
    color: COLORS.white,
    marginBottom: moderateScale(20),
    textAlign: 'center',
    fontSize: 18,
  },
});

export default ForgotPassword;
