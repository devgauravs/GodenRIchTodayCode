// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   Text,
//   Button,
//   Image,
//   StyleSheet,
//   TouchableOpacity,
//   ImageBackground,
//   FlatList,
//   Alert,
//   ScrollView,
// } from 'react-native';
// import {WebView} from 'react-native-webview';
// import {CommonActions, useNavigation} from '@react-navigation/native';
// import CustomHeaderWithImage from '../../../components/CustomHeaderWithImage';
// import {IMAGES} from '../../../services/images';
// import {moderateScale} from 'react-native-size-matters';
// import {FONTS} from '../../../services/fonts';
// import {COLORS} from '../../../services/colors';
// import {useDispatch, useSelector} from 'react-redux';
// import LogoutPopup from '../../../components/LogoutPopup';
// import {
//   LearnDashCoursesApi,
//   LogoutApi,
//   HomePageApi,
// } from '../../../utils/apiService';
// import {
//   getToken,
//   getUserDetails,
//   setToken,
// } from '../../../localStorage/userStorage';
// import {logout} from '../../../redux/slice';
// import Loading from '../../../components/Loading';

// const HomePage = () => {
//   const navigation = useNavigation();
//   const dispatch = useDispatch();

//   const fetchHomeData = useSelector(store => store?.data?.homeData);
//   const {isLoading} = useSelector(store => store?.data);

//   useEffect(() => {
//     HomePageApi(dispatch);
//   }, []);

//   const openDrawer = () => {
//     navigation.openDrawer();
//   };

//   const [profilePopup, setProfilePopup] = useState(false);
//   const [logOut, setLogout] = useState(false);
//   const [classSteps, setClassStep] = useState([]);

//   const handleLogoutAction = async action => {
//     if (action === 'ok') {
//       // await LogoutApi(dispatch);
//       // await setToken(null);
//       // await getUserDetails(null);
//       dispatch(logout());
//       navigation.dispatch(
//         CommonActions.reset({
//           index: 0,
//           routes: [{name: 'Login'}],
//         }),
//       );
//     } else {
//       setLogout(false);
//     }
//   };

//   useEffect(() => {
//     if (fetchHomeData) {
//       setClassStep([
//         {
//           title: fetchHomeData.section_10
//             ? fetchHomeData?.section_10[0]?.text
//             : '',
//           desp: fetchHomeData?.section_11
//             ? fetchHomeData?.section_11[0]?.text
//             : '',
//         },
//         {
//           title: fetchHomeData?.section_12
//             ? fetchHomeData?.section_12[0]?.text
//             : '',
//           desp: fetchHomeData?.section_13
//             ? fetchHomeData?.section_13[0]?.text
//             : '',
//         },
//         {
//           title: fetchHomeData?.section_14
//             ? fetchHomeData?.section_14[0]?.text
//             : '',
//           desp: fetchHomeData?.section_15
//             ? fetchHomeData?.section_15[0]?.text
//             : '',
//         },
//       ]);
//     }
//   }, [fetchHomeData]);

//   const profileList = ['Profile', 'Notification', 'Setting', 'Log out'];
//   return !isLoading ? (
//     <View style={{flex: 1, backgroundColor: 'black'}}>
//       <CustomHeaderWithImage
//         label={'HomePage'}
//         onPress={openDrawer}
//         profilePopup={profilePopup}
//         _onPressProfile={() => setProfilePopup(!profilePopup)}
//       />
//      {classSteps.length > 0 ?  <View style={{flex: 1}}>
//         <ScrollView contentContainerStyle={{flexGrow: 1, paddingBottom: 20}}>
//           <ImageBackground
//             source={{
//               uri: 'https://wildflower.biznessweb.site/goldenrichacademy/wp-content/uploads/2022/03/top_pc.png',
//             }}
//             style={{height: 250, width: '100%', alignSelf: 'center'}}
//             resizeMode="contain">
//             <View style={{flex: 1, justifyContent: 'flex-end'}}>
//               <View
//                 style={{
//                   height: 50,
//                   backgroundColor: 'black',
//                   opacity: 0.95,
//                   justifyContent: 'flex-end',
//                   paddingHorizontal: 15,
//                 }}>
//                 <Text
//                   style={{
//                     fontFamily: FONTS.Mulish_Bold,
//                     color: COLORS.primary,
//                     fontSize: 20,
//                   }}>
//                   {/* {fetchHomeData ? fetchHomeData?.section_0[0]?.text : ''} */}
//                 </Text>
//               </View>
//             </View>
//           </ImageBackground>
//           <View
//             style={{
//               paddingHorizontal: 15,
//               backgroundColor: 'black',
//               opacity: 0.95,
//             }}>
//             <Text
//               style={{
//                 fontFamily: FONTS.Mulish_SemiBold,
//                 fontSize: 12,
//                 marginVertical: 5,
//                 color: COLORS.white,
//               }}>
//               {fetchHomeData?.section_1[0]?.text}
//               <Text>{fetchHomeData?.section_2[0]?.text}</Text>
//             </Text>

//             <TouchableOpacity
//               onPress={async () => {
//                 await LearnDashCoursesApi(dispatch, (result, status) => {
//                   if (result != null && status) {
//                     navigation.navigate('Course');
//                   }
//                 });
//               }}
//               style={styles.button}>
//               <Text style={styles.buttonText}>
//                 {fetchHomeData?.section_2[1]?.text}
//               </Text>
//             </TouchableOpacity>

//             <View
//               style={{
//                 borderRadius: 8,
//                 marginTop: 5,
//                 height: 200,
//                 overflow: 'hidden',
//                 marginTop: 30,
//               }}>
//               <WebView
//                 source={{uri: fetchHomeData?.section_7[6]?.src}}
//                 style={styles.webViewStyle}
//               />
//             </View>
//             <View style={{marginTop: 40}}>
//               <View style={{marginHorizontal: 5}}>
//                 <Text
//                   style={{
//                     color: COLORS.white,
//                     marginTop: moderateScale(10),
//                     fontFamily: FONTS.Mulish_Bold,
//                     fontSize: 18,
//                   }}>
//                   {fetchHomeData?.section_8[0]?.text}
//                 </Text>
//                 <Text
//                   style={{
//                     color: '#8C8383',
//                     marginTop: moderateScale(5),
//                     fontFamily: FONTS.Mulish_SemiBold,
//                     fontSize: 11,
//                   }}>
//                   {fetchHomeData?.section_9[0]?.text}
//                 </Text>
//               </View>

//               <View style={{marginTop: 13, rowGap: 15}}>
//                 {classSteps.map((item, index) => (
//                   <View
//                     key={index}
//                     style={{
//                       backgroundColor: '#1B1B1B',
//                       borderRadius: 10,
//                       padding: 10,
//                       rowGap: 6,
//                     }}>
//                     <Text
//                       style={{
//                         color: COLORS.primary,
//                         fontFamily: FONTS.Mulish_ExtraBold,
//                         fontSize: 15,
//                       }}>
//                       STEP {index + 1} :-
//                       <Text
//                         style={{
//                           color: COLORS.white,
//                           fontFamily: FONTS.Mulish_ExtraBold,
//                           fontSize: 15,
//                         }}>
//                         {' ' + item.title}
//                       </Text>
//                     </Text>
//                     <Text style={{color: COLORS.white}}>{item.desp}</Text>
//                   </View>
//                 ))}
//               </View>

//               {/* Courses */}
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   marginTop: 20,
//                   justifyContent: 'space-between',
//                   paddingHorizontal: 10,
//                 }}>
//                 {/* Featured Courses */}
//                 <View style={{width: moderateScale(170)}}>
//                   <View style={styles.imageContainer}>
//                     <ImageBackground
//                       style={styles.imageBackground}
//                       source={{uri: fetchHomeData?.section_21[2]?.src}}
//                     />
//                   </View>
//                   <Text style={styles.featuredText}>
//                     {fetchHomeData?.section_21[0]?.text}
//                   </Text>
//                   <Text style={styles.titleText}>
//                     {fetchHomeData?.section_22[0]?.text}
//                   </Text>

//                   <TouchableOpacity
//                     style={styles.CourseButtonStyle}
//                     onPress={() => navigation.navigate('FeaturedCourses')}>
//                     <Text style={styles.buttonText}>
//                       {fetchHomeData?.section_22[1]?.text}
//                     </Text>
//                   </TouchableOpacity>
//                 </View>

//                 {/* free courses */}
//                 <View style={{width: moderateScale(170)}}>
//                   <View style={styles.imageContainer}>
//                     <ImageBackground
//                       style={styles.imageBackground}
//                       source={{uri: fetchHomeData?.section_23[2]?.src}}
//                     />
//                   </View>

//                   <Text style={styles.featuredText}>
//                     {fetchHomeData?.section_23[0]?.text}
//                   </Text>
//                   <Text style={styles.titleText}>
//                     {fetchHomeData?.section_24[0]?.text}
//                   </Text>

//                   <TouchableOpacity
//                     style={styles.CourseButtonStyle}
//                     onPress={() => navigation.navigate('FreeCourses')}>
//                     <Text style={styles.buttonText}>
//                       {fetchHomeData?.section_24[1]?.text}
//                     </Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </View>
//           </View>
//         </ScrollView>
//       </View> :  null}
//       {profilePopup && (
//         <View style={styles.profilePopup}>
//           {profileList.map((item, index) => (
//             <TouchableOpacity
//               key={index}
//               onPress={() =>
//                 item === 'Log out' && setLogout(true) && item === 'Profile'
//               }
//               style={styles.profileItem}>
//               <Text style={styles.profileText}>{item}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       )}
//       {logOut && <LogoutPopup visible={logOut} action={handleLogoutAction} />}
//     </View>
//   ) : (
//     <Loading />
//   );
// };

// const styles = StyleSheet.create({
//   button: {
//     height: moderateScale(40),
//     width: '40%',
//     borderRadius: 25,
//     backgroundColor: COLORS.primary,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: moderateScale(5),
//   },
//   imageContainer: {
//     height: 120,
//     width: 160,
//     borderTopEndRadius: 10,
//     borderTopStartRadius: 10,
//     overflow: 'hidden',
//   },
//   imageBackground: {
//     height: '100%',
//     width: '100%',
//   },
//   featuredText: {
//     color: COLORS.white,
//     fontFamily: FONTS.Mulish_SemiBold,
//     fontSize: 10,
//     marginTop: 5,
//   },
//   titleText: {
//     color: COLORS.white,
//     fontFamily: FONTS.Mulish_SemiBold,
//   },
//   descriptionText: {
//     color: COLORS.white,
//     fontFamily: FONTS.Mulish_SemiBold,
//     fontSize: 10,
//   },
//   buttonText: {
//     color: COLORS.black,
//     fontFamily: FONTS.Mulish_Bold,
//     fontSize: 15,
//   },
//   profilePopup: {
//     width: '50%',
//     position: 'absolute',
//     backgroundColor: '#000000',
//     top: moderateScale(50),
//     right: moderateScale(10),
//     padding: moderateScale(5),
//     rowGap: moderateScale(10),
//   },
//   profileItem: {
//     paddingHorizontal: 15,
//     paddingVertical: 8,
//     borderBottomColor: 'white',
//     borderBottomWidth: 1,
//   },
//   profileText: {
//     color: COLORS.white,
//     fontFamily: FONTS.Mulish_Bold,
//     fontSize: 14,
//   },
//   webViewStyle: {
//     flex: 1,
//     marginTop: 10,
//     width: '100%',
//     alignSelf: 'center',
//     borderRadius: 8,
//   },
//   CourseButtonStyle: {
//     height: moderateScale(25),
//     width: '75%',
//     borderRadius: 25,
//     backgroundColor: COLORS.primary,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: moderateScale(5),
//   },
// });

// export default HomePage;









import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Alert,
  ScrollView,
} from 'react-native';
import {WebView} from 'react-native-webview';
import {CommonActions, useNavigation} from '@react-navigation/native';
import CustomHeaderWithImage from '../../../components/CustomHeaderWithImage';
import {IMAGES} from '../../../services/images';
import {moderateScale} from 'react-native-size-matters';
import {FONTS} from '../../../services/fonts';
import {COLORS} from '../../../services/colors';
import {useDispatch, useSelector} from 'react-redux';
import LogoutPopup from '../../../components/LogoutPopup';
import {
  LearnDashCoursesApi,
  LogoutApi,
  HomePageApi,
} from '../../../utils/apiService';
import {
  getToken,
  getUserDetails,
  setToken,
} from '../../../localStorage/userStorage';
import {logout} from '../../../redux/slice';
import Loading from '../../../components/Loading';

const HomePage = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const fetchHomeData = useSelector(store => store?.data?.homeData);
  const {isLoading} = useSelector(store => store?.data);

  useEffect(() => {
    HomePageApi(dispatch);
  }, []);

  const openDrawer = () => {
    navigation.openDrawer();
  };

  const [profilePopup, setProfilePopup] = useState(false);
  const [logOut, setLogout] = useState(false);
  const [classSteps, setClassStep] = useState([]);

  const handleLogoutAction = async action => {
    setProfilePopup(false);
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

  useEffect(() => {
    if (fetchHomeData) {
      setClassStep([
        {
          title: fetchHomeData.section_10
            ? fetchHomeData?.section_10[0]?.text
            : '',
          desp: fetchHomeData?.section_11
            ? fetchHomeData?.section_11[0]?.text
            : '',
        },
        {
          title: fetchHomeData?.section_12
            ? fetchHomeData?.section_12[0]?.text
            : '',
          desp: fetchHomeData?.section_13
            ? fetchHomeData?.section_13[0]?.text
            : '',
        },
        {
          title: fetchHomeData?.section_14
            ? fetchHomeData?.section_14[0]?.text
            : '',
          desp: fetchHomeData?.section_15
            ? fetchHomeData?.section_15[0]?.text
            : '',
        },
      ]);
    }
  }, [fetchHomeData]);

  const profileList = ['Profile', 'Notification', 'Setting', 'Log out'];

  const OnPressTap = item => {
    console.log({item});
    if (item === 'Log out') {
      setLogout(true);
    }
    if (item === 'Profile') {
      navigation.navigate('ProfilePage');
    }
  };
  return !isLoading ? (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <CustomHeaderWithImage
        label={'HomePage'}
        onPress={openDrawer}
        profilePopup={profilePopup}
        _onPressProfile={() => setProfilePopup(!profilePopup)}
      />
      {classSteps.length > 0 ? (
        <View style={{flex: 1}}>
          <ScrollView contentContainerStyle={{flexGrow: 1, paddingBottom: 20}}>
            <ImageBackground
              source={{
                uri: 'https://wildflower.biznessweb.site/goldenrichacademy/wp-content/uploads/2022/03/top_pc.png',
              }}
              style={{height: 250, width: '100%', alignSelf: 'center'}}
              resizeMode="contain">
              <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <View
                  style={{
                    height: 50,
                    backgroundColor: 'black',
                    opacity: 0.95,
                    justifyContent: 'flex-end',
                    paddingHorizontal: 15,
                  }}>
                  <Text
                    style={{
                      fontFamily: FONTS.Mulish_Bold,
                      color: COLORS.primary,
                      fontSize: 20,
                    }}>
                    {/* {fetchHomeData ? fetchHomeData?.section_0[0]?.text : ''} */}
                  </Text>
                </View>
              </View>
            </ImageBackground>
            <View
              style={{
                paddingHorizontal: 15,
                backgroundColor: 'black',
                opacity: 0.95,
              }}>
              <Text
                style={{
                  fontFamily: FONTS.Mulish_SemiBold,
                  fontSize: 12,
                  marginVertical: 5,
                  color: COLORS.white,
                }}>
                {fetchHomeData?.section_1[0]?.text}
                <Text>{fetchHomeData?.section_2[0]?.text}</Text>
              </Text>

              <TouchableOpacity
                onPress={async () => {
                  await LearnDashCoursesApi(dispatch, (result, status) => {
                    if (result != null && status) {
                      navigation.navigate('Course');
                    }
                  });
                }}
                style={styles.button}>
                <Text style={styles.buttonText}>
                  {fetchHomeData?.section_2[1]?.text}
                </Text>
              </TouchableOpacity>

              <View
                style={{
                  borderRadius: 8,
                  marginTop: 5,
                  height: 200,
                  overflow: 'hidden',
                  marginTop: 30,
                }}>
                <WebView
                  source={{uri: fetchHomeData?.section_7[6]?.src}}
                  style={styles.webViewStyle}
                />
              </View>
              <View style={{marginTop: 40}}>
                <View style={{marginHorizontal: 5}}>
                  <Text
                    style={{
                      color: COLORS.white,
                      marginTop: moderateScale(10),
                      fontFamily: FONTS.Mulish_Bold,
                      fontSize: 18,
                    }}>
                    {fetchHomeData?.section_8[0]?.text}
                  </Text>
                  <Text
                    style={{
                      color: '#8C8383',
                      marginTop: moderateScale(5),
                      fontFamily: FONTS.Mulish_SemiBold,
                      fontSize: 11,
                    }}>
                    {fetchHomeData?.section_9[0]?.text}
                  </Text>
                </View>

                <View style={{marginTop: 13, rowGap: 15}}>
                  {classSteps.map((item, index) => (
                    <View
                      key={index}
                      style={{
                        backgroundColor: '#1B1B1B',
                        borderRadius: 10,
                        padding: 10,
                        rowGap: 6,
                      }}>
                      <Text
                        style={{
                          color: COLORS.primary,
                          fontFamily: FONTS.Mulish_ExtraBold,
                          fontSize: 15,
                        }}>
                        STEP {index + 1} :-
                        <Text
                          style={{
                            color: COLORS.white,
                            fontFamily: FONTS.Mulish_ExtraBold,
                            fontSize: 15,
                          }}>
                          {' ' + item.title}
                        </Text>
                      </Text>
                      <Text style={{color: COLORS.white}}>{item.desp}</Text>
                    </View>
                  ))}
                </View>

                {/* Courses */}
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 20,
                    justifyContent: 'space-between',
                    paddingHorizontal: 10,
                  }}>
                  {/* Featured Courses */}
                  <View style={{width: moderateScale(170)}}>
                    <View style={styles.imageContainer}>
                      <ImageBackground
                        style={styles.imageBackground}
                        source={{uri: fetchHomeData?.section_21[2]?.src}}
                      />
                    </View>
                    <Text style={styles.featuredText}>
                      {fetchHomeData?.section_21[0]?.text}
                    </Text>
                    <Text style={styles.titleText}>
                      {fetchHomeData?.section_22[0]?.text}
                    </Text>

                    <TouchableOpacity
                      style={styles.CourseButtonStyle}
                      onPress={() => navigation.navigate('FeaturedCourses')}>
                      <Text style={styles.buttonText}>
                        {fetchHomeData?.section_22[1]?.text}
                      </Text>
                    </TouchableOpacity>
                  </View>

                  {/* free courses */}
                  <View style={{width: moderateScale(170)}}>
                    <View style={styles.imageContainer}>
                      <ImageBackground
                        style={styles.imageBackground}
                        source={{uri: fetchHomeData?.section_23[2]?.src}}
                      />
                    </View>

                    <Text style={styles.featuredText}>
                      {fetchHomeData?.section_23[0]?.text}
                    </Text>
                    <Text style={styles.titleText}>
                      {fetchHomeData?.section_24[0]?.text}
                    </Text>

                    <TouchableOpacity
                      style={styles.CourseButtonStyle}
                      onPress={() => navigation.navigate('FreeCourses')}>
                      <Text style={styles.buttonText}>
                        {fetchHomeData?.section_24[1]?.text}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      ) : null}
      {profilePopup && (
        <View style={styles.profilePopup}>
          {profileList.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => OnPressTap(item)}
              style={styles.profileItem}>
              <Text style={styles.profileText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      {logOut && <LogoutPopup visible={logOut} action={handleLogoutAction} />}
    </View>
  ) : (
    <Loading />
  );
};

const styles = StyleSheet.create({
  button: {
    height: moderateScale(40),
    width: '40%',
    borderRadius: 25,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(5),
  },
  imageContainer: {
    height: 120,
    width: 160,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    overflow: 'hidden',
  },
  imageBackground: {
    height: '100%',
    width: '100%',
  },
  featuredText: {
    color: COLORS.white,
    fontFamily: FONTS.Mulish_SemiBold,
    fontSize: 10,
    marginTop: 5,
  },
  titleText: {
    color: COLORS.white,
    fontFamily: FONTS.Mulish_SemiBold,
  },
  descriptionText: {
    color: COLORS.white,
    fontFamily: FONTS.Mulish_SemiBold,
    fontSize: 10,
  },
  buttonText: {
    color: COLORS.black,
    fontFamily: FONTS.Mulish_Bold,
    fontSize: 15,
  },
  profilePopup: {
    width: '50%',
    position: 'absolute',
    backgroundColor: '#000000',
    top: moderateScale(50),
    right: moderateScale(10),
    padding: moderateScale(5),
    rowGap: moderateScale(10),
  },
  profileItem: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  profileText: {
    color: COLORS.white,
    fontFamily: FONTS.Mulish_Bold,
    fontSize: 14,
  },
  webViewStyle: {
    flex: 1,
    marginTop: 10,
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  CourseButtonStyle: {
    height: moderateScale(25),
    width: '75%',
    borderRadius: 25,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(5),
  },
});

export default HomePage;

