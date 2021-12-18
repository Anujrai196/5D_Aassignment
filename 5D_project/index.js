/**
 * @format
 */
import React from 'react';
import { AppRegistry, StatusBar, } from 'react-native';
import App from './src/index';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './src/store'

const RNRedux = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <StatusBar barStyle={'dark-content'} backgroundColor="#000000" />
      <App />
    </PersistGate>
  </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);
