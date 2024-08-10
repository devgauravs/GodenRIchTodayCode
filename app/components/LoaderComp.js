import {useEffect} from 'react';
import {ActivityIndicator, Modal, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS} from '../services/colors';

export default function LoaderComp() {
  const dispatch = useDispatch();
  const fetchLoaderState = useSelector(store => store.data.isLoading);
  useEffect(() => {
    console.log('fetchLoaderState', fetchLoaderState);
  }, []);
  return fetchLoaderState ? (
    <View
      style={[
        PositionedView,
        {backgroundColor: 'rgba(0,0,0,0.5)', opacity: 0.9},
      ]}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator
          size={200}
          color={COLORS.primary}></ActivityIndicator>
      </View>
    </View>
  ) : null;
}

export const PositionedView = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
};
