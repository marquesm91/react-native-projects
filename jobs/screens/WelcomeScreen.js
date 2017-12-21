import _ from 'lodash';
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { AppLoading } from 'expo';

import * as actions from '../actions';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to JobApp', color: '#03A9F4' },
  { text: 'Use this to get a job', color: '#009688' },
  { text: 'Set your location, then swipe away', color: '#03A9F4' }
];

class WelcomeScreen extends Component {
  componentWillMount() {
    this.props.checkToken();
  }

  componentWillReceiveProps(nextProps) {
    this.redirectToMap(nextProps);
  }

  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  }

  redirectToMap({ token }) {
    if (token) {
      this.props.navigation.navigate('map');
    }
  }

  render() {
    if (_.isNull(this.props.token)) {
      return (
        <View style={styles.container}>
          <AppLoading />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  }
};

const mapStateToProps = ({ auth }) => {
  const { token } = auth;

  return { token };
};

export default connect(mapStateToProps, actions)(WelcomeScreen);
