import React, { Component } from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';
import firebase from 'firebase';

const ROOT_URL = 'https://us-central1-one-time-password-feed9.cloudfunctions.net';

class SignInForm extends Component {
  state = { phone: '', code: '' };
  // Line above equals to constructor below (ES2017)
  /*constructor(props) {
    super(props);

    this.state = { phone: '' };
  }*/

  handleSubmit = async () => {
    const { phone, code } = this.state;

    try {
      const { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, { phone, code });

      firebase.auth().signInWithCustomToken(data.token);
    } catch (err) {
      console.log(err.response.data);
    }
  }

  render() {
    return (
      <View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Phone Number</FormLabel>
          <FormInput
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
          />
        </View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Code Number</FormLabel>
          <FormInput
            value={this.state.code}
            onChangeText={code => this.setState({ code })}
          />
        </View>
        <Button onPress={this.handleSubmit} title={'Submit'} />
      </View>
    );
  }
}

export default SignInForm;
