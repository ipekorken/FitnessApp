import {createStore, combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import app from './app/reducers';
import persisted from './persisted/reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  tokenObj: 'token',
};

const rootReducer = combineReducers({
  persisted: persistReducer(persistConfig, persisted),
  app,
});

export const store = createStore(rootReducer);
export const persistor = persistStore(store);

export default store;
