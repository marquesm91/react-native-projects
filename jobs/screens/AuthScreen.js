import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AuthScreen extends Component {
  /*async componentDidMount() {
    await this.props.facebookLogin();
    this.onAuthComplete(this.props);
    //console.log(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
    //console.log(nextProps);
  }

  onAuthComplete({ token }) {
    if (token) {
      this.props.navigation.navigate('map');
    }
  }*/

  render() {
    return (
      <View>
        <Text>Auth</Text>
        <Text>Auth</Text>
        <Text>Auth</Text>
        <Text>Auth</Text>
      </View>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { token: auth.token };
};

export default connect(mapStateToProps, actions)(AuthScreen);
