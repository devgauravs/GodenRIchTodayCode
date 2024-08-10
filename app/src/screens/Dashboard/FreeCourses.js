import React, { useEffect, useState } from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ScreenHeader from '../../../components/ScreenHeader';
import { COLORS } from '../../../services/colors';
import { IMAGES } from '../../../services/images';
import { FONTS } from '../../../services/fonts';
import { useDispatch, useSelector } from 'react-redux';
import { freeCoursesApi } from '../../../utils/apiService';
import { WebView } from 'react-native-webview';
import Loading from '../../../components/Loading';

export default function FreeCourses(props) {
  const dispatch = useDispatch();

  const fetchFreeCourses = useSelector(store => store?.data?.freeCourses);
  const { isLoading } = useSelector(store => store?.data);
  
  useEffect(() => {
    freeCoursesApi(dispatch);
  }, []);

  const [dayTopic, setDayTopic] = useState([
    '心中的噪音',
    '烏雲上有晴空',
    '蓮花',
    '與你心中的野獸做朋友',
    '心中的湖',
    '放飛心中的氣球',
    '選擇',
    '靈感',
    '財富',
    '愛情',
    '家庭',
    '健康',
    '工作',
    '生命',
    '幸福',
    '金錢',
    '夢想成真',
    '悲傷的日子',
    '想要放棄的日子',
    '糟糕的日子',
    '全新的自己',
  ]);

  const [courseSuitable, setCourseSuitable] = useState([
    'People who want to concentrate',
    'People who want to heal themselves',
    'People who want to continue to feel happiness',
    'People who want to think independently',
    'People who are in a bad mood or prone to depression',
    'People who are irritable and anxious',
    'People who often suffer from insomnia',
  ]);

  return isLoading ? (
    <Loading />
  ) : (
    <View style={{ flex: 1, backgroundColor: COLORS.black }}>
      <ScreenHeader screenName={'Free Courses'} navigation={props.navigation} />
      <View style={{ flex: 1, paddingVertical: 20 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ flex: 1 }}>
            <ImageBackground
              source={{ uri: fetchFreeCourses?.section_2[8]?.src }}
              style={{ height: 200, justifyContent: 'flex-end' }}
              resizeMode="contain">
              <View
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  backgroundColor: COLORS.black,
                  opacity: 0.95,
                }}>
                <Text
                  style={{
                    color: COLORS.primary,
                    fontSize: 20,
                    fontFamily: FONTS.Mulish_Bold,
                  }}>
                  {fetchFreeCourses?.section_0[0]?.text}
                </Text>
              </View>
            </ImageBackground>
            <View style={{ flex: 1, marginHorizontal: 20, rowGap: 15 }}>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: FONTS.Mulish_SemiBold,
                  color: COLORS.white,
                }}>
                {fetchFreeCourses?.section_1[0]?.text}
              </Text>
              <View
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 6,
                  backgroundColor: COLORS.primary,
                  borderRadius: 26,
                  alignSelf: 'flex-start',
                }}>
                <Text style={{ color: COLORS.black }}>Learn More</Text>
              </View>

              <View
                style={{
                  borderRadius: 8,
                  marginTop: 5,
                  height: 200,
                  overflow: 'hidden',
                  marginTop: 30,
                }}>
                <WebView
                  source={{ uri: fetchFreeCourses?.section_5[5]?.src }}
                  style={styles.webViewStyle}
                />
              </View>

              <View style={{ marginTop: 30, rowGap: 12 }}>
                <Image
                  style={{ width: 200, height: 130 }}
                  source={{ uri: fetchFreeCourses?.section_10[4]?.src }}
                />
                <Text
                  style={{
                    color: COLORS.primary,
                    fontSize: 20,
                    fontFamily: FONTS.Mulish_Bold,
                    marginTop: 10,
                  }}>
                  {fetchFreeCourses?.section_10[0]?.text}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: FONTS.Mulish_SemiBold,
                    color: COLORS.white,
                  }}>
                  {fetchFreeCourses?.section_10[2]?.text}
                </Text>
              </View>
              <View
                style={{
                  paddingVertical: 20,
                  paddingHorizontal: 10,
                  backgroundColor: COLORS.lightBlack,
                  borderRadius: 8,
                  rowGap: 25,
                }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        color: COLORS.primary,
                        fontSize: 18,
                        fontFamily: FONTS.Mulish_ExtraBold,
                      }}>
                      {fetchFreeCourses?.section_16[0]?.text}
                    </Text>
                  </View>
                  <View>
                    <Text style={{ color: COLORS.primary, fontSize: 15 }}>
                      看更多
                    </Text>
                    <View
                      style={{
                        height: 1,
                        backgroundColor: COLORS.primary,
                      }}
                    />
                  </View>
                </View>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.scrollContainer}>
                  {dayTopic.map((item, index) => (
                    <View key={index} style={styles.itemContainer}>
                      <View style={styles.circle}>
                        <Text style={styles.circleText}>
                          {'天' + (index + 1)}
                        </Text>
                      </View>
                      <Text style={styles.itemText}>{item}</Text>
                    </View>
                  ))}
                </ScrollView>
              </View>
              <View
                style={{
                  padding: 10,
                  paddingBottom: 20,
                  backgroundColor: COLORS.lightBlack,
                  borderRadius: 8,
                  rowGap: 15,
                }}>
                <Image
                  source={{ uri: fetchFreeCourses?.section_15[7]?.src }}
                  style={{ height: 135, width: '100%' }}
                  resizeMode="contain"
                />
              </View>
              <Image
                source={{ uri: fetchFreeCourses?.section_15[5]?.src }}
                style={{ height: 350, width: '100%' }}
                resizeMode="cover"
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  webViewStyle: {
    flex: 1,
    marginTop: 10,
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  scrollContainer: {
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  itemContainer: {
    marginHorizontal: 10,
    alignItems: 'center',
  },
  circle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  circleText: {
    color: COLORS.black,
    fontSize: 8,
  },
  itemText: {
    color: COLORS.white,
    textAlign: 'center',
    fontSize: 10,
  },
});
