<<<<<<< HEAD
import { AppRegistry } from 'react-native';
import App from './App';
AppRegistry.registerComponent('myfirstapp', () => App);
=======
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './src/store/configureStore';

const store = configureStore();

const ReactNativeRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('myfirstapp', () => ReactNativeRedux);
>>>>>>> a2d90e05fe3ff12facf1400c229170756e9adec9
