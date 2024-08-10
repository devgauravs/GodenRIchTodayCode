import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import ScreenHeader from '../../../components/ScreenHeader';
import {COLORS} from '../../../services/colors';
import {IMAGES} from '../../../services/images';
import {FONTS} from '../../../services/fonts';
import {moderateScale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {store} from '../../../redux/store';
import {featuredCoursesApi} from '../../../utils/apiService';
import WebView from 'react-native-webview';

const barsData = [
  {
    title: '人脈拓展',
    description:
      '與成功人士建立深度聯繫，拓展您的財富視野。',
  },
  {
    title: '升級你的思維',
    description:
      '拋棄過時的觀念，自信地應對每一個財務挑戰。',
  },
  {
    title: '如何致富',
    description:
      '深入簡單的策略，輕鬆了解如何累積財富。',
  },
];

export default function FeaturedCourses(props) {
  const dispatch = useDispatch();

  const fetchFeaturedCourses = useSelector(
    store => store?.data?.featuredCourses,
  );

  console.log('fetchFeaturedCourses..................', fetchFeaturedCourses);

  useEffect(() => {
    featuredCoursesApi(dispatch);
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: COLORS.black}}>
      <ScreenHeader
        screenName={'Featured Courses'}
        navigation={props.navigation}
      />
      <View style={{flex: 1, paddingVertical: 20}}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={{flex: 1}}>
            <View
              style={{
                borderRadius: 8,
                marginTop: 5,
                height: 200,
                overflow: 'hidden',
                marginTop: 30,
              }}>
              <WebView
                source={{uri: fetchFeaturedCourses?.section_2[2]?.src}}
                style={styles.webViewStyle}
              />
            </View>

            <View style={{flex: 1, marginHorizontal: 10, rowGap: 15}}>
              <Text style={styles.heading}>
                {fetchFeaturedCourses?.section_0[0]?.text}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: FONTS.Mulish_SemiBold,
                  color: COLORS.white,
                }}>
                財富信念大師班：您財務自由的終極指南
              </Text>

              {/* Payment Button */}
              <View style={[styles.paymentButtonCont, {marginBottom: 40}]}>
                <View style={styles.paymentButton}>
                  <Text style={styles.buttonText}>一次付款 299 美元 美元</Text>
                </View>
                <View style={styles.paymentButton}>
                  <Text style={styles.buttonText}>$99.66/每月 3次分期付款</Text>
                </View>
              </View>
            </View>

            {/* Courses */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
              }}>
              <View style={{width: moderateScale(170)}}>
                <View style={styles.imageContainer}>
                  <ImageBackground
                    style={styles.imageBackground}
                    source={{uri: fetchFeaturedCourses?.section_16[2]?.src}}
                  />
                </View>
                <Text style={styles.featuredText}>追求財富和自由的你</Text>
                <Text style={styles.titleText}>
                  我知道這條路並不容易。每一次挫折，每一次艱難的攀登，你都勇敢地面對，從未放棄。您可能讀過各種各樣的書籍，看過無數的視頻，甚至嘗試過各種投資策略。但真正引導你成功的答案可能就隱藏在這裡！
                </Text>

                <TouchableOpacity style={styles.CourseButtonStyle}>
                  <Text style={styles.buttonText}>精實更多</Text>
                </TouchableOpacity>
              </View>

              {/* free courses */}
              {/* <View style={{width: moderateScale(170)}}>
                <View style={styles.imageContainer}>
                  <ImageBackground
                    style={styles.imageBackground}
                    source={IMAGES.DumyHome}
                  />
                </View>

                <Text style={styles.featuredText}>
                  The Belief in Rich master class
                </Text>
                <Text style={styles.titleText}>
                  Lorem ipsum is typically a corrupted version of De finibus
                  bonorum et malorum
                </Text>

                <TouchableOpacity style={styles.CourseButtonStyle}>
                  <Text style={styles.buttonText}>Learn More</Text>
                </TouchableOpacity>
              </View> */}
            </View>

            {/* Course feature */}

            <View style={styles.courseFeatureCont}>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 10,
                  justifyContent: 'space-between',
                }}>
                <View style={{width: '60%'}}>
                  <Text style={styles.courseFeatureHeading}>
                  課程特色
                  </Text>
                  <Text style={[styles.titleText, {marginVertical: 8}]}>
                  你準備好掌握那種改變命運的致富信念，並迎接財富自由的未來了嗎？
                  </Text>
                </View>
                <Text style={styles.courseFeatureHeading}>看全部</Text>
              </View>
            </View>

            {/* bars */}
            {barsData.map((bar, index) => (
              <View
                key={index}
                style={{
                  paddingHorizontal: 10,
                  backgroundColor: COLORS.lightBlack,
                  borderRadius: 8,
                  rowGap: 20,
                  width: '94%',
                  alignSelf: 'center',
                  marginTop: 10,
                }}>
                <View style={{flex: 1, marginTop: 8, justifyContent: 'center'}}>
                  <Text style={styles.barHeading}>{bar.title}</Text>
                  <Text style={styles.titleText}>{bar.description}</Text>
                </View>
                <View
                  style={{flexDirection: 'row', alignItems: 'center'}}></View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: COLORS.primary,
    fontSize: 20,
    fontFamily: FONTS.Mulish_Bold,
  },
  paymentButtonCont: {
    flexDirection: 'row',
    /// justifyContent: 'space-between',
    marginVertical: 15,
    alignSelf: 'center',
  },
  buttonText: {
    color: COLORS.black,
    fontFamily: FONTS.Mulish_Bold,
    fontSize: 10,
  },
  paymentButton: {
    paddingHorizontal: 12,
    paddingVertical: 7,
    backgroundColor: COLORS.primary,
    borderRadius: 26,
    alignSelf: 'flex-start',
    marginLeft: moderateScale(20),
  },
  learnMoreMainCont: {
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    marginHorizontal: 20,
    height: 247,
  },
  learnMoreCont: {
    width: '48%',
    borderWidth: 1,
    borderColor: 'white',
  },
  whiteText: {
    color: COLORS.white,
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
    fontSize: 15,
    fontWeight: 800,
    marginTop: 5,
  },
  titleText: {
    fontSize: 10,
    fontWeight: '500',
    color: COLORS.white,
    fontFamily: FONTS.Mulish_SemiBold,
    lineHeight: 14,
  },
  CourseButtonStyle: {
    height: moderateScale(25),
    width: '50%',
    borderRadius: 25,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(10),
  },
  courseFeatureCont: {
    width: '94%',
    alignSelf: 'center',
  },
  courseFeatureHeading: {
    color: COLORS.primary,
    fontFamily: FONTS.Mulish_SemiBold,
    fontSize: 18,
    fontWeight: 800,
    marginTop: 5,
  },
  barHeading: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: 800,
    fontFamily: FONTS.Mulish_ExtraBold,
  },
});
