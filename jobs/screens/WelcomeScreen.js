import _ from 'lodash';
import React, { Component } from 'react';
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
  state = { token: null }
  
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
    if (_.isNull(this.state.token)) {
      return <AppLoading />;
    }

    return (
      <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { token } = auth;

  return { token };
};

export default connect(mapStateToProps, actions)(WelcomeScreen);
