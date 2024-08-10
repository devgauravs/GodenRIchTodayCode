import {Modal, Text, TouchableOpacity, View} from 'react-native';
import {PositionedView} from './LoaderComp';
import {COLORS} from '../services/colors';
import {FONTS} from '../services/fonts';

export default function LogoutPopup(props) {
  const {visible, action} = props;
  return (
    <Modal visible={visible} transparent>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.5)',
          justifyContent: 'center',
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            backgroundColor: COLORS.lightBlack,
            paddingVertical: 30,
            paddingHorizontal: 15,
            rowGap: 15,
          }}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 22,
              fontFamily: FONTS.Mulish_ExtraBold,
              alignSelf: 'center',
            }}>
            Comeback Soon !
          </Text>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 18,
              fontFamily: FONTS.Mulish_SemiBold,
              alignSelf: 'center',
            }}>
            You Sure, That You Want To Logout ?
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
              paddingHorizontal: 15,
              columnGap: 30,
            }}>
            <TouchableOpacity
              onPress={() => action('cancel')}
              style={{
                flex: 1,
                backgroundColor: COLORS.white,
                borderRadius: 5,
                padding: 10,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: FONTS.Mulish_SemiBold,
                  color: COLORS.black,
                  alignSelf: 'center',
                }}>
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => action('ok')}
              style={{
                flex: 1,
                backgroundColor: COLORS.primary,
                borderRadius: 5,
                padding: 10,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: FONTS.Mulish_SemiBold,
                  color: COLORS.black,
                  alignSelf: 'center',
                }}>
                OK
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
