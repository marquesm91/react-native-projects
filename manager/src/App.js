import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//import firebase from 'react-native-firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  /*componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCQJjhG3Fz0oN3goy8gXtKX-uNEmBIa84A',
      authDomain: 'manager-17f42.firebaseapp.com',
      databaseURL: 'https://manager-17f42.firebaseio.com',
      projectId: 'manager-17f42',
      storageBucket: '',
      messagingSenderId: '167982372113'
    };

    firebase.initializeApp(config);
  }*/

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
