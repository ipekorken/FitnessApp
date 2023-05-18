import React from 'react';
import {Provider} from 'react-redux';
import App from './App';
import store, {persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const StoreProvider = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

export default StoreProvider;
