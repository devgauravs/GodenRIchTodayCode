import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import MainStackNavigator from './Stacknavigator';
import {SafeAreaView} from 'react-native-safe-area-context';
import {moderateScale, verticalScale, scale} from 'react-native-size-matters';
const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {width: 300, backgroundColor: 'gray'},
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="MainStackNavigator"
        component={MainStackNavigator}
        options={{
          headerShown: false,
          drawerItemStyle: {
            display: 'none',
          },
        }}
      />
    </Drawer.Navigator>
  );
};
const CustomDrawer = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: verticalScale(20),
        paddingHorizontal: moderateScale(15),
        paddingBottom: verticalScale(10),
      }}>
      <View
        style={[
          {paddingHorizontal: moderateScale(0), paddingRight: moderateScale(0)},
          Styles.sidebartop,
        ]}>
        <View style={Styles.profiletopleft}>
          {/* <Image
            style={Styles.userimg}
            resizeMode="cover"
            source={IMAGES.Avatar}
          /> */}
        </View>
        <View style={{marginLeft: verticalScale(10)}}>
          <Text style={Styles.username}>Jameson Williams</Text>
          <Text style={Styles.useremail}>jameson10willl@gmail.com</Text>
        </View>
      </View>
      <DrawerContentScrollView
        contentContainerStyle={{
          paddingTop: verticalScale(15),
          paddingLeft: moderateScale(0),
          paddingRight: moderateScale(0),
          paddingBottom: verticalScale(10),
        }}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('HomePage')}
            style={Styles.sidebarlist}>
            <View style={{}}>
              <Text style={Styles.sidebartext}>Hom</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Profile')}
            style={Styles.sidebarlist}>
            <View style={{}}>
              <Text style={Styles.sidebartext}>Profile Settings</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Changepassword')}
            style={Styles.sidebarlist}>
            <View style={{}}>
              {/* <View style={Styles.iconleft}>
                <Iconify icon="lucide:lock" size={18} color={'white'} />
              </View> */}
              <Text style={Styles.sidebartext}>Change Password</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('TermsConditions')}
            style={Styles.sidebarlist}>
            <View style={{}}>
              {/* <View style={Styles.iconleft}>
                <Iconify icon="bx:file" size={18} color={'white'} />
              </View> */}
              <Text style={Styles.sidebartext}>Terms & Conditions</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('PrivacyPolicy')}
            style={Styles.sidebarlist}>
            <View style={{}}>
              <View style={Styles.iconleft}>
                <Iconify icon="bx:file" size={18} color={'white'} />
              </View>
              <Text style={Styles.sidebartext}>Privacy Policy</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('FaqScreen')}
            style={Styles.sidebarlist}>
            <View style={{}}>
              {/* <View style={Styles.iconleft}>
                <Iconify icon="codicon:question" size={18} color={'white'} />
              </View> */}
              <Text style={Styles.sidebartext}>FAQ’s</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('LoginScreen')}
            style={Styles.sidebarlist}>
            <View style={{}}>
              {/* <View style={Styles.iconleft}>
                <Iconify icon="mdi:logout" size={18} color={'white'} />
              </View> */}
              <Text style={Styles.sidebartext}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};
export default DrawerNavigation;
const Styles = StyleSheet.create({
  profiletopleft: {
    borderWidth: 3,
    borderColor: 'gray',
    borderRadius: 100,
    width: 55,
    height: 55,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userimg: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
    resizeMode: 'cover',
  },
  sidebartop: {
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingBottom: verticalScale(20),
  },
  username: {
    fontSize: scale(14),
    color: 'white',
    //fontFamily: 'FONTS.RalewaySemiBold',
  },
  useremail: {
    fontSize: scale(11),
    color: 'white',
    // fontFamily: 'FONTS.RalewayRegular',
  },
  sidebarlist: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(0),
    marginVertical: verticalScale(10),
  },
  sidebartext: {
    fontSize: scale(14),
    color: 'white',
    // fontFamily: 'FONTS.RalewaySemiBold',
    paddingLeft: moderateScale(11),
  },
  iconleft: {
    width: 34,
    height: 34,
    borderRadius: 8,
    backgroundColor: 'white',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
