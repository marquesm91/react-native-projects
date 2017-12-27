import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

export default class App extends React.Component {
  state = { places: [], selectedPlace: null };

  onPlaceAdded = placeName => {
    this.setState({ places: [...this.state.places, { 
      key: Math.random(),
      name: placeName,
      image: {
        uri: 'http://images1.aystatic.com/articles/106/49054_home_hero.jpg?1429245631'
      }
    }]});
  }


  placeSelectedHandler = key => {
    this.setState({ selectedPlace: this.state.places.find(place => place.key === key)});
  }

  placeDeletedHandler = () => {
    this.setState({
      places: this.state.places.filter(place => place.key !== this.state.selectedPlace.key),
      selectedPlace: null
    });
  }

  modalClosedHandler = () => {
    this.setState({ selectedPlace: null });
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail 
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput onPlaceAdded={this.onPlaceAdded} />
        <PlaceList places={this.state.places} onItemSelected={this.placeSelectedHandler}/>
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
