import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PositionedView} from './LoaderComp';
import {COLORS} from '../services/colors';

const Loading = () => {
  return (
    <View style={[PositionedView, styles.center]}>
      <ActivityIndicator size={200} color={COLORS.primary} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
});
