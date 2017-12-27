<<<<<<< HEAD
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import placeImage from './src/assets/image.jpg'

export default class App extends React.Component {
  state = { placeName: '', places: [] };

  placeNameChangedHandler = value => {
    this.setState({ placeName: value })
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }

    const { placeName, places } = this.state;

    const placeId = Math.random();

    this.setState({ places: [...places, { 
      id: placeId,
      name: placeName,
      image: {
        uri: 'http://images1.aystatic.com/articles/106/49054_home_hero.jpg?1429245631'
      }
    }]});
  }

  placeDeletedHandler = index => {
    this.setState({ places: this.state.places.filter(place => place.id !== index) });
=======
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions/index';

class App extends Component {
  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName)
  };

  placeDeletedHandler = () => {
    this.props.onDeletePlace();
  }

  modalClosedHandler = () => {
    this.props.onDeselectPlace();
  }

  placeSelectedHandler = key => {
    this.props.onSelectPlace(key);
>>>>>>> a2d90e05fe3ff12facf1400c229170756e9adec9
  }

  render() {
    return (
      <View style={styles.container}>
<<<<<<< HEAD
        <PlaceInput
          placeName={this.state.placeName}
          placeNameChangedHandler={this.placeNameChangedHandler}
          placeSubmitHandler={this.placeSubmitHandler}
        />
        <PlaceList places={this.state.places} onItemDeleted={this.placeDeletedHandler}/>
=======
        <PlaceDetail 
          selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.props.places}
          onItemSelected={this.placeSelectedHandler}
        />
>>>>>>> a2d90e05fe3ff12facf1400c229170756e9adec9
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
<<<<<<< HEAD
=======

const mapStateToProps = state => {
  const { places, selectedPlace } = state.places;
  
  return { places, selectedPlace };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: name => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: key => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
>>>>>>> a2d90e05fe3ff12facf1400c229170756e9adec9
