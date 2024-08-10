import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {FONTS} from '../services/fonts';
import {IMAGES} from '../services/images';
import {COLORS} from '../services/colors';

export default function ScreenHeader(props) {
  const {screenName} = props;
  return (
    <View>
      <SafeAreaView style={{}}>
        <View style={{}}>
          <Text
            style={{
              color: COLORS.primary,
              alignSelf: 'center',
              fontSize: 20,
              fontFamily: FONTS.Mulish_SemiBold,
            }}>
            {screenName}
          </Text>
          <View
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => props.navigation.goBack()}
              style={{paddingHorizontal: 20, paddingVertical: 15}}>
              <Image
                source={IMAGES.backIcon}
                style={{
                  height: 14,
                  width: 6,
                  resizeMode: 'contain',
                  tintColor: 'white',
                }}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
