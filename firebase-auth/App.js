import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

export default class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyBvWkqQFMVWcKoCvpENt0dZdihTJ4lPf9Q',
      authDomain: 'one-time-password-feed9.firebaseapp.com',
      databaseURL: 'https://one-time-password-feed9.firebaseio.com',
      projectId: 'one-time-password-feed9',
      storageBucket: 'one-time-password-feed9.appspot.com',
      messagingSenderId: '200743221261'
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
