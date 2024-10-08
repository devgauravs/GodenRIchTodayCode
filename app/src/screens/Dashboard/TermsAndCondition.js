import {
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
  import ScreenHeader from '../../../components/ScreenHeader';
  import {COLORS , FONTS} from '../../../services/colors';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../../redux/store';
import { useEffect } from 'react';
import { termsAndConditionApi } from '../../../utils/apiService';

  
  export default function TermsAndCondition(props) {
 
    const dispatch = useDispatch();
    let combinedElements = [];
    const fetchTermsAndConditon = useSelector(store => store?.data?.termsAndCondition);

    for (const sectionKey in fetchTermsAndConditon) {
      if (fetchTermsAndConditon.hasOwnProperty(sectionKey)) {
          combinedElements = combinedElements.concat(fetchTermsAndConditon[sectionKey]);
      }
  }
  console.log('###################combinedElements',combinedElements);

    useEffect(()=>{
     termsAndConditionApi(dispatch);
    },[])

    return (
      <View style={{flex: 1, backgroundColor: COLORS.black}}>
        <ScreenHeader screenName={'Terms and condition'} navigation={props.navigation} />
        <View style={{flex: 1, paddingVertical: 20}}>
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            {
              combinedElements.map((item)=>(
                <View style={{flex: 1 , width:'93%',alignSelf:'center',padding:10 }}>
            {
              item.type==='heading'  &&
              <Text style={styles.heading}>{item.text}</Text>
            }
               
               {
              item.type==='paragraph'  &&
              <Text style={styles.details}>{item.text}</Text>
            }
               
              </View>
              ))
            }
      
          </ScrollView>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    heading:{
   color:COLORS.white,
   fontSize:18,
   fontWeight:700,
    },
    details:{
      color:COLORS.white,
      fontSize:12,
      fontWeight:500,
    },
  })
  