import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCQJjhG3Fz0oN3goy8gXtKX-uNEmBIa84A',
      authDomain: 'manager-17f42.firebaseapp.com',
      databaseURL: 'https://manager-17f42.firebaseio.com',
      projectId: 'manager-17f42',
      storageBucket: '',
      messagingSenderId: '167982372113'
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
