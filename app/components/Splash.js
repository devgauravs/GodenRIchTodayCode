import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {IMAGES} from '../services/images';
import {FONTS} from '../services/fonts';
import {COLORS} from '../services/colors';
import {moderateScale, verticalScale, scale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import CustomButton from './CustomButton';
import {Modal, Portal, Button} from 'react-native-paper';
import {BlurView} from '@react-native-community/blur';
import {getToken} from '../localStorage/userStorage';

const Splash = ({}) => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  // async function userLogedId() {
  //   const userToken = await getToken();
  //   if (userToken != null && userToken != '') {
  //     navigation.navigate('HomePage');
  //   } else {
  //     showModal();
  //   }
  // }

  return (
    <ImageBackground
      source={IMAGES.SplashMain} // Replace with your image path
      style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.Welcome}>
          Welcome
          <Text style={styles.Back}> Back !</Text>
        </Text>
        <Text style={styles.dummyText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>

        <View
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            flex: 0.5,
            alignItems: 'center',
          }}>
          <Image
            style={{
              justifyContent: 'center',
              height: 120,
              width: 150,
              resizeMode: 'contain',
              alignItems: 'center',
            }}
            source={IMAGES.SplashLogo}></Image>
        </View>

        {visible && (
          <BlurView style={styles.absolute} blurType="dark" blurAmount={2} />
        )}

        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.modalContainer}>
          <Image
            style={{height: 50, width: 50, alignSelf: 'center'}}
            source={IMAGES.MessageIMg}></Image>
          {/* <Text
            style={styles.modalText}>
            English (United States){' '}
          </Text> */}
          <Text
            onPress={() => navigation.navigate('Register')}
            style={styles.modalText1}>
            Chinese (China)
          </Text>
        </Modal>

        <CustomButton
          onPress={()=> navigation.navigate("LoginScreen")}
          label={'Get Started'}
          ButtonStyle={styles.buttonContainer}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'contain',
  },
  modalContainer: {
    backgroundColor: '#414141',
    padding: 30,
    margin: 20,
    borderRadius: 10,
  },
  modalText: {
    marginBottom: 10,
    textAlign: 'center',
    color: COLORS.primary,
    fontSize: 16,
    fontFamily: FONTS.Mulish_SemiBold,
  },
  modalText1: {
    marginBottom: 10,
    textAlign: 'center',
    color: '#A6A6A6',
    fontSize: 16,
    fontFamily: FONTS.Mulish_SemiBold,
  },
  dummyText: {
    lineHeight: scale(20),
    fontFamily: FONTS.Mulish_SemiBold,
    color: COLORS.white,
    fontSize: scale(13),
    marginTop: scale(20),
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Back: {
    fontFamily: FONTS.Mulish_Bold,
    color: COLORS.primary,
    fontSize: scale(20),
  },
  Welcome: {
    fontFamily: FONTS.Mulish_Bold,
    color: COLORS.white,
    fontSize: scale(20),
  },
  container: {
    flex: 1,
    padding: moderateScale(20),
    paddingTop: '20%',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default Splash;
