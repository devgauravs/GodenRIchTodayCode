import React from 'react';
import { View, Text, StyleSheet, FlatList , ScrollView } from 'react-native';
  import ScreenHeader from '../../../components/ScreenHeader';
  import {COLORS, FONTS} from '../../../services/colors';

const PaymentProtection = (props) => {
  const features = [
    'Exciting new features',
    'Improved user experience',
    'Exclusive content',
  ];

  return (

    <View style={{flex: 1, backgroundColor: COLORS.black}}>
    <ScreenHeader
      screenName={'PaymentProtection'}
      navigation={props.navigation}
    />
    <View style={{flex: 1, paddingVertical: 20}}>
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
    <View style={styles.container}>
      <Text style={styles.title}>Coming Soon</Text>
      <Text style={styles.message}>
        We're working hard to bring you something awesome. Stay tuned for updates!
      </Text>
      <View style={styles.dataContainer}>
        <Text style={styles.subTitle}>What to Expect:</Text>
        <FlatList
          data={features}
          renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <Text style={styles.footer}>Estimated Launch: In few Days</Text>
    </View>

    </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    heading: {
        color: COLORS.white,
        fontSize: 18,
        fontWeight: 700,
      },
      details: {
        color: COLORS.white,
        fontSize: 12,
        fontWeight: 500,
      },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  message: {
    fontSize: 18,
    marginBottom: 30,
    textAlign: 'center',
  },
  dataContainer: {
    width: '100%',
    marginBottom: 40,
  },
  subTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
  },
  listItem: {
    fontSize: 18,
    marginBottom: 10,
  },
  footer: {
    fontSize: 16,
    color: '#888',
  },
});

export default PaymentProtection;
