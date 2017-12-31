import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Animated
} from 'react-native';
import { connect } from 'react-redux';

import PlaceList from '../../components/PlaceList/PlaceList';
import { getPlaces } from '../../store/actions';
class FindPlace extends Component {
  static navigatorStyle = {
    navBarButtonColor: 'orange'
  }

  state = {
    placesLoaded: false,
    scaleInAndOutAnim: new Animated.Value(1),
    fadeInAnim: new Animated.Value(0)
  }

  constructor(props) {
    super(props);

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  componentDidMount() {
    this.props.onLoadPlaces();
  }

  onNavigatorEvent = event => {
    if (event.type === 'ScreenChangedEvent') {
      if (event.id === 'willAppear') {
        this.props.onLoadPlaces();
        // this.setState({
        //   placeLoaded: false
        // });
      }
    }
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'sideDrawerToggle') {
        this.props.navigator.toggleDrawer({
          side: 'left'
        });
      }
    }
  }

  placesLoadedHandler = () => {
    Animated.timing(this.state.fadeInAnim, {
      toValue: 1,
      duration: 500, // milliseconds
      useNativeDriver: true
    }).start();
  }

  placesSearchHandler = () => {
    Animated.timing(this.state.scaleInAndOutAnim, {
      toValue: 0,
      duration: 250, // milliseconds
      useNativeDriver: true
    }).start(() => {
      this.setState({ placesLoaded: true });
      this.placesLoadedHandler();
    });
  }

  itemSelectedHandler = key => {
    const selectedPlace = this.props.places.find(place => place.key === key);

    this.props.navigator.push({
      screen: 'awesome-places.PlaceDetailScreen',
      title: selectedPlace.name,
      passProps: { selectedPlace }
    });
  }

  render() {
    let content = (
      <Animated.View
        style={{
          transform: [
            {
              scale: this.state.scaleInAndOutAnim.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [0, 1.3, 1]
              })
            }
          ]
        }}
      >
        <TouchableWithoutFeedback onPress={this.placesSearchHandler}>
          <View style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Find Places</Text>
          </View>
        </TouchableWithoutFeedback>
      </Animated.View>
    );

    if (this.state.placesLoaded) {
      content = (
        <Animated.View
          style={{
            opacity: this.state.fadeInAnim,
          }}
        >
          <PlaceList
            places={this.props.places}
            onItemSelected={this.itemSelectedHandler}
          />
        </Animated.View>
      );
    }

    return (
      <View style={this.state.placesLoaded ? null : styles.buttonContainer}>
        {content}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchButton: {
    borderColor: 'orange',
    borderWidth: 3,
    borderRadius: 50,
    padding: 20
  },
  searchButtonText: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 26
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadPlaces: () => dispatch(getPlaces())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FindPlace);
