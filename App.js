import 'react-native-gesture-handler';
import 'react-native-reanimated';
import React from 'react';
import { StatusBar, StyleSheet, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './app/redux/store';
import { Provider } from 'react-redux';
import DrawerNavigation from './app/router/DrawerNavigator';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import LoaderComp from './app/components/LoaderComp';

LogBox.ignoreLogs([
  "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
  'NativeBase: The contrast ratio of',
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

let persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<LoaderComp />} persistor={persistor}>
        <NavigationContainer independent={true}>
          <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
          <DrawerNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
