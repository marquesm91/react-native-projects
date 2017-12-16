import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAfQWI33E4LWbZJggxt2R4RFA4g7UoL49k',
      authDomain: 'auth-81acb.firebaseapp.com',
      databaseURL: 'https://auth-81acb.firebaseio.com',
      projectId: 'auth-81acb',
      storageBucket: 'auth-81acb.appspot.com',
      messagingSenderId: '649552011824'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
