import React from 'react';
import {
  View,
  Text,
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {FONTS} from '../services/fonts';
import {IMAGES} from '../services/images';
import {COLORS} from '../services/colors';
import {useNavigation} from '@react-navigation/native';
import {moderateScale} from 'react-native-size-matters';

const CustomHeaderWithImage = props => {
  const {profilePopup,_onPressProfile} = props;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPress}>
        <Image style={{height: 30, width: 30}} source={IMAGES.Sidebar} />
      </TouchableOpacity>
      <View style={styles.Subcontainer}>
        {/* <Image source={IMAGES.SplashLogo} style={styles.logo} />
        <Text style={styles.headertext}>{props.lable}</Text> */}

        <Image source={IMAGES.headerlogo} style={styles.headerlogo} />
      </View>
      <TouchableOpacity onPress={()=>_onPressProfile()}>
        <Image style={{height: 30, width: 30}} source={IMAGES.DummyImage} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: moderateScale(70),
    backgroundColor: COLORS.black,
    padding: moderateScale(20),
    alignItems: 'center',
    marginTop: 38,
  },
  Subcontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,

    justifyContent: 'center',
  },
  headertext: {
    color: COLORS.white,
    fontFamily: FONTS.Mulish_Bold,
    fontSize: 25,
    height: 40,
  },
  logo: {height: 50, width: 50, resizeMode: 'contain'},

  headerlogo: {height: 150, width: 150, resizeMode: 'contain'},
});

export default CustomHeaderWithImage;
