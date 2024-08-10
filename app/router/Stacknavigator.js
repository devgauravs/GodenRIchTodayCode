import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import Splash from '../components/Splash';
import LoginScreen from '../src/screens/authscreen/login';
import Register from '../src/screens/authscreen/Register';
import {moderateScale, verticalScale, scale} from 'react-native-size-matters';
import ActivateAccount from '../src/screens/authscreen/ActivateAccount';
import ForgotPassword from '../src/screens/authscreen/ForgotPassword';
import CofirmPassword from '../src/screens/authscreen/CofirmPassword';
import ResetPassword from '../src/screens/authscreen/ResetPassword';
import HomePage from '../src/screens/Dashboard/HomePage';
import ProfilePage from '../src/screens/Dashboard/ProfilePage';
import { Course } from '../src/screens/Dashboard/Course';
import FreeCourses from '../src/screens/Dashboard/FreeCourses';
import FeaturedCourses from '../src/screens/Dashboard/FeatureCourses';
import TermsAndCondition from '../src/screens/Dashboard/TermsAndCondition';
import PrivacyPolicy from '../src/screens/Dashboard/PrivacyPolicy'
import HelpAssistance from '../src/screens/Dashboard/HelpAssistance';
import RefundPolicy from '../src/screens/Dashboard/RefundPolicy';
import PaymentProtection from '../src/screens/Dashboard/PaymentProtection';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerMode: 'screen'
      }}>
      {/* <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false, gestureEnabled: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ActivateAccount"
        component={ActivateAccount}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CofirmPassword"
        component={CofirmPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Course"
        component={Course}
        options={{headerShown: false}}
      />
      <Stack.Screen
      name="FreeCourses"
      component={FreeCourses}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="FeaturedCourses"
      component={FeaturedCourses}
      options={{headerShown: false}}
    />

     <Stack.Screen
      name="TermsAndCondition"
      component={TermsAndCondition}
      options={{headerShown: false}}
    />

<Stack.Screen
      name="PrivacyPolicy"
      component={PrivacyPolicy}
      options={{headerShown: false}}
    />

<Stack.Screen
      name="HelpAssistance"
      component={HelpAssistance}
      options={{headerShown: false}}
    />

<Stack.Screen
      name="RefundPolicy"
      component={RefundPolicy}
      options={{headerShown: false}}
    />

<Stack.Screen
      name="PaymentProtection"
      component={PaymentProtection}
      options={{headerShown: false}}
    />

      {/* Add more screens here if needed */}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  menubtn: {
    marginLeft: moderateScale(10),
    padding: scale(10),
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: moderateScale(10),
  },
  userimg: {
    width: scale(30),
    height: scale(30),
    borderRadius: scale(15),
  },
});

export default MainStackNavigator;
