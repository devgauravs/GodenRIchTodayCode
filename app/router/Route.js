import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigation from './DrawerNavigator';
import Splash from '../components/Splash';
import Register from '../src/screens/authscreen/Register';
import ActivateAccount from '../src/screens/authscreen/ActivateAccount';
import ForgotPassword from '../src/screens/authscreen/ForgotPassword';
import CofirmPassword from '../src/screens/authscreen/CofirmPassword';
import ResetPassword from '../src/screens/authscreen/ResetPassword';
import Login from '../src/screens/authscreen/login';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();
const Route = () => {
  const {loginData} = useSelector(state => state.data);
  console.log({loginData});
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {loginData ? (
        <Stack.Screen name="Drawer" component={DrawerNavigation} />
      ) : (
        <Stack.Group>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="LoginScreen"
            component={Login}
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
          />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export default Route;
