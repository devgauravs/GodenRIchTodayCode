// import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
// import {FONTS} from '../../../services/fonts';
// import {IMAGES} from '../../../services/images';
// import {useState} from 'react';
// import {ScrollView} from 'react-native';

// export default function ProfilePage(props) {
//   const [profileList, setprofileList] = useState([
//     {heading: 'First Name', value: 'ABCD', required: true},
//     {heading: 'Last Name', value: 'ABCD', required: true},
//     {heading: 'Nick Name', value: 'ABCD', required: true},
//     {heading: 'Email', value: 'abc@gmail.com'},
//     {heading: 'M. No.', value: '44 86864 8988'},
//     {heading: 'City', value: 'City Name'},
//     {heading: 'Pin-Code', value: '090023'},
//     {heading: 'Country', value: 'China', dropDown: false},
//     {heading: 'Address', value: 'Enter your Address'},
//   ]);
//   return (
//     <View style={{flex: 1, backgroundColor: 'black'}}>
//       <View style={{backgroundColor: '#FDBE57', height: '24%'}}>
//         <SafeAreaView style={{height: '100%'}}>
//           <View style={{flex: 1}}>
//             <View>
//               <Text
//                 style={{
//                   color: 'black',
//                   alignSelf: 'center',
//                   fontSize: 20,
//                   fontFamily: FONTS.Mulish_SemiBold,
//                 }}>
//                 Profile
//               </Text>
//               <View
//                 style={{
//                   position: 'absolute',
//                   left: 0,
//                   top: 0,
//                   bottom: 0,
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                 }}>
//                 <TouchableOpacity onPress={()=>props.navigation.goBack()} style={{paddingHorizontal: 20, paddingVertical: 15}}>
//                   <Image
//                     source={IMAGES.backIcon}
//                     style={{
//                       height: 14,
//                       width: 6,
//                       resizeMode: 'contain',
//                       tintColor: 'black',
//                     }}></Image>
//                 </TouchableOpacity>
//               </View>
//             </View>
//             <View style={{justifyContent: 'flex-end', flex: 1}}>
//               <View style={{backgroundColor: 'black', height: 30}}></View>
//               <View
//                 style={{
//                   width: 101,
//                   height: 102,
//                   backgroundColor: 'black',
//                   position: 'absolute',
//                   alignSelf: 'center',
//                   borderWidth: 1.5,
//                   borderColor: '#FDBE57',
//                   borderRadius: 100,
//                   overflow: 'hidden',
//                 }}>
//                 <Image
//                   source={IMAGES.DummyImage}
//                   style={{height: '100%', width: '100%'}}></Image>
//               </View>
//             </View>
//           </View>
//         </SafeAreaView>
//       </View>
//       <View style={{flex: 1}}>
//         <ScrollView contentContainerStyle={{flexGrow: 1}}>
//           <View style={{flex: 1, paddingVertical: 20}}>
//             <View style={{rowGap: 40, paddingHorizontal: 30}}>
//               {profileList.map((item, index) => (
//                 <View key={index} style={{rowGap: 6}}>
//                   <View
//                     style={{flexDirection: 'row', alignItems: 'flex-start'}}>
//                     <View style={{flex: 1}}>
//                       <Text style={{color: 'white'}}>
//                         {item.heading}
//                         {item.required != null && item.required ? (
//                           <Text style={{color: 'white'}}> *Required*</Text>
//                         ) : null}
//                       </Text>
//                     </View>
//                     <View>
//                       <Text style={{color: 'white'}}>{item.value}</Text>
//                     </View>
//                   </View>
//                   <View
//                     style={{
//                       height: 1,
//                       backgroundColor: 'white',
//                       opacity: 0.2,
//                     }}></View>
//                 </View>
//               ))}
//             </View>
//             <View
//               style={{
//                 backgroundColor: '#FDBE57',
//                 paddingVertical: 12,
//                 marginHorizontal: 20,
//                 borderRadius: 40,
//                 marginTop: 25,
//               }}>
//               <Text style={{color: 'black', alignSelf: 'center'}}>
//                 Save Changes
//               </Text>
//             </View>
//           </View>
//         </ScrollView>
//       </View>
//     </View>
//   );
// }






import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View, ScrollView, TextInput } from 'react-native';
import { FONTS } from '../../../services/fonts';
import { IMAGES } from '../../../services/images';
import { getProfileData } from '../../../utils/apiService';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ValidationSchema } from '../../../services/CommonValidation';

export default function ProfilePage(props) {
  const dispatch = useDispatch();
  const ProfileData = useSelector(store => store?.data?.profileData);
  const { isLoading } = useSelector(store => store?.data);

  const [profileList, setProfileList] = useState([
    { heading: 'First Name', value: ProfileData?.data?.first_name, required: true },
    { heading: 'Last Name', value: ProfileData?.data?.last_name, required: true },
    { heading: 'Nick Name', value: ProfileData?.data?.nickname, required: true },
    { heading: 'Email', value: ProfileData?.data?.user_email },
    { heading: 'M. No.', value: '- - - - - -' },
    { heading: 'City', value: '- - - - ' },
    { heading: 'Pin-Code', value: '- - - - ' },
    { heading: 'Country', value: '- - - - ', dropDown: false },
    { heading: 'Address', value: 'Enter your Address' },
  ]);

  useEffect(() => {
    getProfileData(dispatch);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <View style={{ backgroundColor: '#FDBE57', height: '24%' }}>
        <SafeAreaView style={{ height: '100%' }}>
          <View style={{ flex: 1 }}>
            <View>
              <Text
                style={{
                  color: 'black',
                  alignSelf: 'center',
                  fontSize: 20,
                  fontFamily: FONTS.Mulish_SemiBold,
                }}>
                Profile
              </Text>
              <View
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => props.navigation.goBack()}
                  style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
                  <Image
                    source={IMAGES.backIcon}
                    style={{
                      height: 14,
                      width: 6,
                      resizeMode: 'contain',
                      tintColor: 'black',
                    }}></Image>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ justifyContent: 'flex-end', flex: 1 }}>
              <View style={{ backgroundColor: 'black', height: 30 }}></View>
              <View
                style={{
                  width: 101,
                  height: 102,
                  backgroundColor: 'black',
                  position: 'absolute',
                  alignSelf: 'center',
                  borderWidth: 1.5,
                  borderColor: '#FDBE57',
                  borderRadius: 100,
                  overflow: 'hidden',
                }}>
                <Image
                  source={IMAGES.DummyImage}
                  style={{ height: '100%', width: '100%' }}></Image>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ flex: 1, paddingVertical: 20 }}>
            <Formik
              initialValues={{
                firstName: ProfileData?.data?.first_name || '',
                lastName: ProfileData?.data?.last_name || '',
                nickName: ProfileData?.data?.nickname || '',
                email: ProfileData?.data?.user_email || '',
              }}
              validationSchema={ValidationSchema}
              onSubmit={values => {
                // Handle form submission
                console.log('Form Values:', values);
              }}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <>
                  <View style={{ rowGap: 40, paddingHorizontal: 30 }}>
                    {profileList.map((item, index) => (
                      <View key={index} style={{ rowGap: 6 }}>
                        <View
                          style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                          <View style={{ flex: 1 }}>
                            <Text style={{ color: 'white' }}>
                              {item.heading}
                              {item.required != null && item.required ? (
                                <Text style={{ color: 'white' }}> *Required*</Text>
                              ) : null}
                            </Text>
                          </View>
                          <View style={{ width: '50%' }}>
                            <TextInput
                              onChangeText={handleChange(item.heading.toLowerCase().replace(' ', ''))}
                              onBlur={handleBlur(item.heading.toLowerCase().replace(' ', ''))}
                              value={values[item.heading.toLowerCase().replace(' ', '')]}
                              style={{
                                color: 'white',
                                alignSelf: 'flex-end',
                              }}
                            />
                            {errors[item.heading.toLowerCase().replace(' ', '')] && touched[item.heading.toLowerCase().replace(' ', '')] && (
                              <Text style={{ color: 'red' }}>
                                {errors[item.heading.toLowerCase().replace(' ', '')]}
                              </Text>
                            )}
                          </View>
                        </View>
                        <View
                          style={{
                            height: 1,
                            backgroundColor: 'white',
                            opacity: 0.2,
                          }}></View>
                      </View>
                    ))}
                  </View>
                  <TouchableOpacity onPress={handleSubmit}>
                    <View
                      style={{
                        backgroundColor: '#FDBE57',
                        paddingVertical: 12,
                        marginHorizontal: 20,
                        borderRadius: 40,
                        marginTop: 25,
                      }}>
                      <Text style={{ color: 'black', alignSelf: 'center' }}>
                        Save Changes
                      </Text>
                    </View>
                  </TouchableOpacity>
                </>
              )}
            </Formik>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

