import {configureStore} from '@reduxjs/toolkit';
import slice from './slice';
import {persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from '@reduxjs/toolkit';

// export const store = configureStore({
//   reducer: {
//     DATA: slice,
//   },
// });

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
let rootReducer = combineReducers({
  DATA: slice,
});
let persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
});
