import React from 'react';
import {
  View,
  Text,
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {FONTS} from '../services/fonts';
import {IMAGES} from '../services/images';
import {COLORS} from '../services/colors';
import {useNavigation} from '@react-navigation/native';

const Header = ({lable, showBackButton}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ImageBackground>
        <View style={styles.container}>
          {/* <Image source={IMAGES.SplashLogo} style={styles.logo} />
        <Text style={styles.headertext}>{lable}</Text> */}
          <Image source={IMAGES.headerlogo} style={styles.headerlogo} />
        </View>
        {console.log(showBackButton)}
        {showBackButton == undefined && (
          <TouchableOpacity
            style={{width: 50}}
            onPress={() => navigation.goBack()}>
            <Image source={IMAGES.backIcon} style={styles.backIcon} />
          </TouchableOpacity>
        )}
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    marginTop: 20,
  },
  headertext: {
    color: COLORS.white,
    fontFamily: FONTS.Mulish_Bold,
    fontSize: 25,
  },
  logo: {height: 70, width: 70, resizeMode: 'contain'},
  backIcon: {height: 20, width: 20, resizeMode: 'contain', marginLeft: 10},
  headerlogo: {height: 70, width: 250, resizeMode: 'cover'},
});

export default Header;
