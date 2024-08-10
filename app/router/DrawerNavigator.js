// import React, {useState} from 'react';
// import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
// import {
//   createDrawerNavigator,
//   DrawerContentScrollView,
// } from '@react-navigation/drawer';
// import MainStackNavigator from './Stacknavigator';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import {moderateScale, verticalScale, scale} from 'react-native-size-matters';
// import {COLORS} from '../services/colors';
// import ProfilePage from '../src/screens/Dashboard/ProfilePage';
// const Drawer = createDrawerNavigator();
// const DrawerNavigation = () => {
//   return (
//     <Drawer.Navigator
//       screenOptions={{
//         drawerStyle: {width:'60%', backgroundColor: '#2F2F2F'},
//       }}
//       drawerContent={props => <CustomDrawer {...props} />}>
//       <Drawer.Screen
//         name="MainStackNavigator"
//         component={MainStackNavigator}
//         options={{
//           headerShown: false,
//           drawerItemStyle: {
//             display: 'none',
//           },
//         }}
//       />
//     </Drawer.Navigator>
//   );
// };
// const CustomDrawer = ({navigation}) => {
//   const [menuList, setMenuList] = useState([
//     'Home',
//     'Featured Courses',
//     'Free Courses',
//     'Privacy policy',
//     'Terms and condition',
//     'Contact us',
//     'Help & Support',
//     'Refund policy',
//     'Payment protection',
//     'Logout',
//   ]);
//   const navigationHandler = (item, index) => {
//     switch (item) {
//       case 'Home':
//         navigation.navigate('HomePage');
//         break;
//       case 'Featured Courses':
//         navigation.navigate('FeaturedCourses');
//         break;
//       case 'Free Courses':
//         navigation.navigate('FreeCourses');
//         break;
//       case 'Privacy policy':
//         navigation.navigate('PrivacyPolicy');
//         break;
//       case 'Terms and condition':
//         navigation.navigate('TermsAndCondition');
//         break;
//       case 'Contact us':
//         navigation.navigate('ContactUs');
//         break;
//       case 'Help & Support':
//         navigation.navigate('HelpAssistance');
//         break;
//       case 'Refund policy':
//         navigation.navigate('RefundPolicy');
//         break;
//       case 'Payment protection':
//         navigation.navigate('PaymentProtection');
//         break;
//       case 'Logout':
//         // Handle logout logic here
//         break;
//       default:
//         break;
//     }
//   };
//   return (
//     <SafeAreaView
//       style={{
//         flex: 1,
//         paddingTop: verticalScale(20),
//         paddingHorizontal: moderateScale(15),
//         paddingBottom: verticalScale(10),
//       }}>
//       <DrawerContentScrollView
//         contentContainerStyle={{
//           paddingTop: verticalScale(15),
//           paddingLeft: moderateScale(0),
//           paddingRight: moderateScale(0),
//           paddingBottom: verticalScale(10),
//         }}>
//           {/* <ProfilePage></ProfilePage> */}
//         <View>
//           {menuList.map((item, index) => (
//             <View key={index}>
//               <TouchableOpacity
//                 onPress={() => navigationHandler(item, index)}
//                 style={Styles.sidebarlist}>
//                 <View style={{}}>
//                   <Text style={Styles.sidebartext}>{item}</Text>
//                 </View>
//               </TouchableOpacity>
//             </View>
//           ))}
//         </View>
//       </DrawerContentScrollView>
//     </SafeAreaView>
//   );
// };
// export default DrawerNavigation;
// const Styles = StyleSheet.create({
//   profiletopleft: {
//     borderWidth: 3,
//     borderColor: 'gray',
//     borderRadius: 100,
//     width: 55,
//     height: 55,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   userimg: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 100,
//     resizeMode: 'cover',
//   },
//   sidebartop: {
//     alignItems: 'center',
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderBottomColor: 'gray',
//     paddingBottom: verticalScale(20),
//   },
//   username: {
//     fontSize: scale(14),
//     color: 'white',
//     //fontFamily: 'FONTS.RalewaySemiBold',
//   },
//   useremail: {
//     fontSize: scale(11),
//     color: 'white',
//     // fontFamily: 'FONTS.RalewayRegular',
//   },
//   sidebarlist: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: moderateScale(0),
//     marginVertical: verticalScale(10),
//   },
//   sidebartext: {
//     fontSize: scale(14),
//     color: 'white',
//     // fontFamily: 'FONTS.RalewaySemiBold',
//     paddingLeft: moderateScale(11),
//   },
//   iconleft: {
//     width: 34,
//     height: 34,
//     borderRadius: 8,
//     backgroundColor: 'white',
//     color: 'white',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });





import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image, Linking} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import MainStackNavigator from './Stacknavigator';
import {SafeAreaView} from 'react-native-safe-area-context';
import {moderateScale, verticalScale, scale} from 'react-native-size-matters';
import {COLORS} from '../services/colors';
import ProfilePage from '../src/screens/Dashboard/ProfilePage';
import LogoutPopup from '../components/LogoutPopup';
import { logout } from '../redux/slice';
import { useDispatch } from 'react-redux';
const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
 
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {width:'60%', backgroundColor: '#2F2F2F'},
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
  const [logOut, setLogout] = useState(false);
  const dispatch = useDispatch()
  const [menuList, setMenuList] = useState([
    'Home',
    'Featured Courses',
    'Free Courses',
    'Privacy policy',
    'Terms and condition',
    'Contact us',
    'Help & Support',
    'Refund policy',
    'Payment protection',
    'Logout',
  ]);
  const navigationHandler = (item, index) => {
    switch (item) {
      case 'Home':
        navigation.navigate('HomePage');
        break;
      case 'Featured Courses':
        navigation.navigate('FeaturedCourses');
        break;
      case 'Free Courses':
        navigation.navigate('FreeCourses');
        break;
      case 'Privacy policy':
        navigation.navigate('PrivacyPolicy');
        break;
      case 'Terms and condition':
        navigation.navigate('TermsAndCondition');
        break;
      case 'Contact us':
        Linking.openURL('mailto:goldenrichofficial@gmail.com')
        break;
      case 'Help & Support':
        navigation.navigate('HelpAssistance');
        break;
      case 'Refund policy':
        navigation.navigate('RefundPolicy');
        break;
      case 'Payment protection':
        navigation.navigate('PaymentProtection');
        break;
      case 'Logout':
       setLogout(true)
        break;
      default:
        break;
    }
  };

  const handleLogoutAction = async action => {
    setLogout(false)
    if (action === 'ok') {
      // await LogoutApi(dispatch);
      // await setToken(null);
      // await getUserDetails(null);
      dispatch(logout());
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Login'}],
        }),
      );
    } else {
      setLogout(false);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: verticalScale(20),
        paddingHorizontal: moderateScale(15),
        paddingBottom: verticalScale(10),
      }}>
      <DrawerContentScrollView
        contentContainerStyle={{
          paddingTop: verticalScale(15),
          paddingLeft: moderateScale(0),
          paddingRight: moderateScale(0),
          paddingBottom: verticalScale(10),
        }}>
          {/* <ProfilePage></ProfilePage> */}
        <View>
          {menuList.map((item, index) => (
            <View key={index}>
              <TouchableOpacity
                onPress={() => navigationHandler(item, index)}
                style={Styles.sidebarlist}>
                <View style={{}}>
                  <Text style={Styles.sidebartext}>{item}</Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        {logOut && <LogoutPopup visible={logOut} action={handleLogoutAction} />}
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

