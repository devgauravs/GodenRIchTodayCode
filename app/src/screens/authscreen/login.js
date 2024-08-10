// // Login.js
// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   Alert,
//   Image,
//   TouchableOpacity,
// } from 'react-native';
// import {useFormik} from 'formik';
// import {FONTS} from '../../../services/fonts';
// import {COLORS} from '../../../services/colors';
// import CustomHeader from '../../../components/CustomHeader';
// import TextInputField from '../../../components/TestInputContainer';
// import CustomButton from '../../../components/CustomButton';
// import {useNavigation} from '@react-navigation/native';
// import {CommonInputStyle} from './Style';
// import {useDispatch, useSelector} from 'react-redux';
// import {loginValidationSchema} from '../../../services/CommonValidation';
// import {LoginApi, loginUser} from '../../../utils/apiService';
// import {setIsLoading, setLoginData} from '../../../redux/slice';
// import {IMAGES} from '../../../services/images';
// import {
//   getRememberMe,
//   setRememberMe,
//   setToken,
//   setUserDetails,
// } from '../../../localStorage/userStorage';
// // Import the thunk

// const Login = () => {
//   const navigation = useNavigation();
//   const dispatch = useDispatch();
//   const fetchLoader = useSelector(store => store.data.isLoading);
//   const [rememberMe, setRemember] = useState(false);
//   const {handleChange, handleBlur, handleSubmit, values, errors, touched} =
//     useFormik({
//       initialValues: {
//         email: '',
//         password: '',
//       },
//       validationSchema: loginValidationSchema,
//       onSubmit: async values => {
//         const {email, password} = values;
//         await LoginApi(email, password, dispatch, (result, status) => {
//           if (result != null && status) {
//             setToken(result.data.token);
//             setUserDetails(result.data.user);
//             if (rememberMe) {
//               setRememberMe({email: email, password: password});
//             }
//             dispatch(setLoginData(result));
//             Alert.alert('Login Success', 'You have successfully logged in.');
//             navigation.navigate('Drawer');
//           }
//         });
//       },
//     });
//   useEffect(() => {
//     getData();
//   }, []);
//   const getData = async () => {
   
//     // handleChange("email")
//     values.email = '';
//     const rememberMeData = await getRememberMe();
//     console.log('value to check', rememberMeData);
//     if (rememberMeData != null && rememberMeData != '') {
//       setRemember(true);
//     } else {
//     }
//   };
//   return (
//     <View style={styles.container}>
//       <CustomHeader label={'Login'} showBackButton={false} />
//       <Text style={styles.title}>Log in</Text>
//       <ScrollView>
//         <View style={styles.formContainer}>
//           <TextInputField
//             label={'Email Address'}
//             value={values.email}
//             onChangeText={handleChange('email')}
//             onBlur={handleBlur('email')}
//             placeholder={''}
//             error={touched.email && errors.email}
//             inputStyle={CommonInputStyle.inputStyle}
//             placeholderTextColor={CommonInputStyle.placeholderTextColor}
//             selectionColor={CommonInputStyle.selectionColor}
//             labelStyle={CommonInputStyle.labelStyle}
//             labelTextStyle={CommonInputStyle.labelTextStyle}
//           />
//           {touched.email && errors.email && (
//             <Text style={styles.errorText}>{errors.email}</Text>
//           )}

//           <TextInputField
//             label={'Password'}
//             value={values.password}
//             onChangeText={handleChange('password')}
//             onBlur={handleBlur('password')}
//             placeholder={''}
//             error={touched.password && errors.password}
//             secureTextEntry={true}
//             inputStyle={CommonInputStyle.inputStyle}
//             placeholderTextColor={CommonInputStyle.placeholderTextColor}
//             selectionColor={CommonInputStyle.selectionColor}
//             labelStyle={CommonInputStyle.labelStyle}
//             labelTextStyle={CommonInputStyle.labelTextStyle}
//           />
//           {touched.password && errors.password && (
//             <Text style={styles.errorText}>{errors.password}</Text>
//           )}
//         </View>
//         <View
//           style={{
//             flexDirection: 'row',
//             alignItems: 'center',
//             paddingVertical: 20,
//             paddingHorizontal: 25,
//           }}>
//           <TouchableOpacity
//             onPress={() => setRemember(!rememberMe)}
//             style={{
//               flex: 1,
//               flexDirection: 'row',
//               alignItems: 'center',
//               columnGap: 5,
//             }}>
//             {rememberMe ? (
//               <Image source={IMAGES.checkBox} style={{height: 15, width: 15}} />
//             ) : (
//               <View
//                 style={{
//                   height: 15,
//                   width: 15,
//                   backgroundColor: COLORS.primary,
//                   borderRadius: 2,
//                 }}></View>
//             )}
//             <Text
//               style={{
//                 color: COLORS.white,
//                 fontSize: 14,
//                 fontFamily: FONTS.Mulish_SemiBold,
//               }}>
//               Remember Me
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             onPress={() => navigation.navigate('ForgotPassword')}>
//             <Text
//               style={{
//                 color: COLORS.primary,
//                 fontSize: 14,
//                 fontFamily: FONTS.Mulish_SemiBold,
//               }}>
//               Forgot Password ?
//             </Text>
//           </TouchableOpacity>
//         </View>
//         <CustomButton
//           label={'Log in'}
//           onPress={handleSubmit}
//           Buttonstyle={styles.Buttonstyle}
//         />
//         <View style={styles.registerPrompt}>
//           <Text style={{color: COLORS.white}}>
//             Don't have an account?
//             <Text
//               onPress={() => navigation.navigate('Register')}
//               style={{color: COLORS.primary}}>
//               {' '}
//               Register
//             </Text>
//           </Text>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: COLORS.black,
//   },
//   title: {
//     color: COLORS.primary,
//     marginTop: 20,
//     marginLeft: 30,
//     fontSize: 20,
//     fontFamily: FONTS.Mulish_Bold,
//   },
//   formContainer: {
//     alignItems: 'center',
//     marginTop: 15,
//   },
//   errorText: {
//     color: 'red',
//     fontSize: 12,
//     marginTop: 5,
//     alignSelf: 'flex-start',
//     marginLeft: 30,
//   },
//   Buttonstyle: {
//     // Add your button styles here
//   },
//   registerPrompt: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
// });

// export default Login;


// Login.js
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useFormik} from 'formik';
import {FONTS} from '../../../services/fonts';
import {COLORS} from '../../../services/colors';
import CustomHeader from '../../../components/CustomHeader';
import TextInputField from '../../../components/TestInputContainer';
import CustomButton from '../../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {CommonInputStyle} from './Style';
import {useDispatch, useSelector} from 'react-redux';
import {loginValidationSchema} from '../../../services/CommonValidation';
import {LoginApi, loginUser} from '../../../utils/apiService';
import {setIsLoading, setLoginData} from '../../../redux/slice';
import {IMAGES} from '../../../services/images';
import {
  getRememberMe,
  setRememberMe,
  setToken,
  setUserDetails,
} from '../../../localStorage/userStorage';
// Import the thunk

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const fetchLoader = useSelector(store => store.data.isLoading);
  const [rememberMe, setRemember] = useState(false);
  const {handleChange, handleBlur, handleSubmit, values, errors, touched} =
    useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: loginValidationSchema,
      onSubmit: async values => {
        const {email, password} = values;
        await LoginApi(email, password, dispatch, (result, status) => {
          if (result != null && status) {
            setToken(result.data.token);
            setUserDetails(result.data.user);
            if (rememberMe) {
              setRememberMe({email: email, password: password});
            }
            dispatch(setLoginData(result));
            Alert.alert('Login Success', 'You have successfully logged in.');
            navigation.navigate('Drawer');
          }
        });
      },
    });
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
   
    // handleChange("email")
    values.email = '';
    const rememberMeData = await getRememberMe();
    console.log('value to check', rememberMeData);
    if (rememberMeData != null && rememberMeData != '') {
      setRemember(true);
    } else {
    }
  };
  return (
    <View style={styles.container}>
      <CustomHeader label={'Login'} showBackButton={false} />
      <Text style={styles.title}>Log in</Text>
      <ScrollView>
        <View style={styles.formContainer}>
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
            <Text style={styles.errorText}>{errors.password}</Text>
          )}
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 20,
            paddingHorizontal: 25,
          }}>
          <TouchableOpacity
            onPress={() => setRemember(!rememberMe)}
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              columnGap: 5,
            }}>
            {rememberMe ? (
              <Image source={IMAGES.checkBox} style={{height: 15, width: 15}} />
            ) : (
              <View
                style={{
                  height: 15,
                  width: 15,
                  backgroundColor: COLORS.primary,
                  borderRadius: 2,
                }}></View>
            )}
            <Text
              style={{
                color: COLORS.white,
                fontSize: 14,
                fontFamily: FONTS.Mulish_SemiBold,
              }}>
              Remember Me
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text
              style={{
                color: COLORS.primary,
                fontSize: 14,
                fontFamily: FONTS.Mulish_SemiBold,
              }}>
              Forgot Password ?
            </Text>
          </TouchableOpacity>
        </View>
        <CustomButton
          label={'Log in'}
          onPress={handleSubmit}
          Buttonstyle={styles.Buttonstyle}
        />
        <View style={styles.registerPrompt}>
          <Text style={{color: COLORS.white}}>
            Don't have an account?
            <Text
              onPress={() => navigation.navigate('Register')}
              style={{color: COLORS.primary}}>
              {' '}
              Register
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
    marginLeft: 30,
    fontSize: 20,
    fontFamily: FONTS.Mulish_Bold,
  },
  formContainer: {
    alignItems: 'center',
    marginTop: 15,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
  Buttonstyle: {
    // Add your button styles here
  },
  registerPrompt: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default Login;

