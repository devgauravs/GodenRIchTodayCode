import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {COLORS} from '../services/colors';
import {FONTS} from '../services/fonts';

const TextInputField = props => {
  return (
    <View style={[styles.textInputContainer, props.style]}>
      <TextInput
        style={[styles.input, props.inputStyle]}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
        selectionColor={props.selectisonColor}
        onChangeText={props.onChangeText}
        value={props.value}
        keyboardType={props.keyboardType}
        multiline={props.multiline}
        maxLength={props.maxLength}
        secureTextEntry={props.secureTextEntry}
        numberOfLines={props.numberOfLines}
      />
      <View style={[styles.labalContainer, props.labelStyle]}>
        <Text style={[styles.labelText, props.labelTextStyle]}>
          {props.label}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    marginTop: moderateScale(25),
  },
  input: {
    backgroundColor: COLORS.black,
    width: '90%',
    padding: verticalScale(15),
    // height:verticalScale(20),
    borderRadius: 7,
    borderWidth: 1.5,
    borderColor: COLORS.primary,
    color: COLORS.white,
    // fontFamily:Fonts.regular
  },
  labalContainer: {
    backgroundColor: COLORS.black,
    // height: verticalScale(25),
    position: 'absolute',
    top: moderateScale(-15),
    left: moderateScale(15),
    justifyContent: 'center',
    alignContent: 'center',
  },
  labelText: {
    textAlign: 'center',
    paddingHorizontal: moderateScale(10),
    fontSize: 16,
    color: COLORS.white,
    // fontFamily:Fonts.semiBold
  },
});

export default TextInputField;
