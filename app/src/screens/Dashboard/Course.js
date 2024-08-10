import {Image, ImageBackground, SafeAreaView, ScrollView, Text, View} from 'react-native';
import ScreenHeader from '../../../components/ScreenHeader';
import {COLORS} from '../../../services/colors';
import {useState} from 'react';
import {IMAGES} from '../../../services/images';
import {FONTS} from '../../../services/fonts';
import {useSelector} from 'react-redux';

export const Course = props => {
  const fetchCourseList = useSelector(store => store.data.learnDashCourses);
  return (
    <View style={{flex: 1, backgroundColor: COLORS.black}}>
      <ScreenHeader screenName={'Course'} navigation={props.navigation} />
      <View style={{flex: 1}}>
        <View style={{marginVertical: 30, marginHorizontal: 20, rowGap: 2}}>
          <View
            style={{flexDirection: 'row', alignItems: 'center', columnGap: 5}}>
            <Text
              style={{
                color: COLORS.primary,
                fontSize: 18,
                fontFamily: FONTS.Mulish_SemiBold,
              }}>
              {'All Cources'}
            </Text>
            <View
              style={{
                height: 20,
                width: 20,
                backgroundColor: COLORS.primary,
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 13,
                  fontFamily: FONTS.Mulish_SemiBold,
                }}>
                {fetchCourseList.length}
              </Text>
            </View>
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: COLORS.primary,
              width: '35%',
            }}></View>
        </View>
        <View style={{flex: 1}}>
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            {fetchCourseList != null && fetchCourseList.length != 0 ? (
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  rowGap: 20,
                  marginHorizontal: 20,
                }}>
                {fetchCourseList.map((item, index) => (
                  <View key={index} style={{width: '46%'}}>
                    <View>
                      <View
                        style={{
                          height: 145,
                          borderWidth: 1,
                          borderColor: 'yellow',
                          backgroundColor: 'white',
                          borderRadius: 8,
                          overflow: 'hidden',
                        }}>
                        <ImageBackground source={{uri: item.thumbnail_url}} style={{padding:3,flex:1}}>
                          <View style={{alignSelf:'flex-start',backgroundColor: COLORS.primary,paddingHorizontal:5,borderRadius:40}}>
                            <Text style={{color:COLORS.black}}>{item.type}</Text>
                          </View>
                        </ImageBackground>
                        {/* <Image
                          source={{uri: item.thumbnail_url}}
                          style={{
                            height: '100%',
                            width: '100%',
                            resizeMode: 'cover',
                          }}></Image> */}
                      </View>
                      <View
                        style={{
                          position: 'absolute',
                          height: 50,
                          backgroundColor: 'black',
                          width: '100%',
                          bottom: 0,
                          justifyContent: 'flex-end',
                          opacity: 0.99,
                        }}>
                        <Text
                          style={{
                            color: 'white',
                            fontSize: 12,
                            fontFamily: FONTS.Mulish_SemiBold,
                            opacity: 0.6,
                          }}>
                          {item.total_lessons + ' Lessons'}
                        </Text>
                      </View>
                    </View>
                    <Text
                      style={{
                        color: 'white',
                        marginVertical: 6,
                        fontSize: 14,
                        fontFamily: FONTS.Mulish_ExtraBold,
                      }}>
                      {item.title}
                    </Text>
                  </View>
                ))}
              </View>
            ) : null}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};
