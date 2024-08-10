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

const CustomButton = props => {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, props.ButtonStyle]}>
      <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={styles.buttonText}>{props.label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: moderateScale(25),
    justifyContent: 'center',
    alignItems: 'center',
    width: moderateScale(370),
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 40,
    marginBottom: 20,
    width: '87%',
  },
  buttonText: {
    fontSize: 18,
    color: COLORS.black,
    fontFamily: FONTS.Mulish_SemiBold,
    textAlign: 'center',
  },
});

export default CustomButton;
