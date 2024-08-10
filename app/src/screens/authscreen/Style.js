// Style.js
import { moderateScale } from 'react-native-size-matters';
import { COLORS } from '../../../services/colors';

export const CommonInputStyle = {
  inputStyle: {
    width: moderateScale(320),
    alignSelf: 'center',  
  },
  placeholderTextColor: COLORS.white,
  selectisonColor: COLORS.white,
  labelStyle: {
    // Add your common label styles here
  },
  labelTextStyle: {
    // Add your common label text styles here
  },
};
