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
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput
          placeName={this.state.placeName}
          placeNameChangedHandler={this.placeNameChangedHandler}
          placeSubmitHandler={this.placeSubmitHandler}
        />
        <PlaceList places={this.state.places} onItemDeleted={this.placeDeletedHandler}/>
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
