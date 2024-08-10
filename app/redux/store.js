import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import slice from './slice'; // Your slice reducer
import { combineReducers } from '@reduxjs/toolkit';


// Persist config
const persistConfig = {
  key: 'root',
  storage:AsyncStorage
};
 let rootReducer =combineReducers({
  data:slice
 })
 let persistedReducer = persistReducer(persistConfig,rootReducer)
 export const store = configureStore({
  reducer:persistedReducer
 })
