import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';

import Icon from 'react-native-vector-icons/Ionicons';
import { deletePlace } from '../../store/actions';

class PlaceDetail extends Component {
  state = {
    viewMode: "portrait"
  };

  constructor(props) {
    super(props);
    Dimensions.addEventListener("change", this.updateStyles);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.updateStyles);
  }

  updateStyles = dims => {
    this.setState({
      viewMode: dims.window.height > 500 ? "portrait" : "landscape"
    });
  };

  placeDeletedHandler = () => {
    this.props.onDeletePlace(this.props.selectedPlace.key);
    this.props.navigator.pop();
  }

  render() {
    const initialRegion = {
      latitude: this.props.selectedPlace.location.latitude,
      longitude: this.props.selectedPlace.location.longitude,
      latitudeDelta: 0.0122,
      longitudeDelta: Dimensions.get("window").width / Dimensions.get("window").height * 0.0122
    }

    return (
      <View
        style={[
          styles.container,
          this.state.viewMode === "portrait"
            ? styles.portraitContainer
            : styles.landscapeContainer
        ]}
      >
        <View
          style={[
            styles.imageAndMapContainer,
            this.state.viewMode === "portrait"
              ? styles.portraitContainer
              : styles.landscapeContainer
          ]}
        >
          <View style={styles.subContainer}>
            <Image
              source={this.props.selectedPlace.image}
              style={styles.placeImage}
            />
          </View>
          <View style={styles.subContainer}>
            <MapView
              initialRegion={{
                latitude: this.props.selectedPlace.location.latitude,
                longitude: this.props.selectedPlace.location.longitude,
                latitudeDelta: 0.0122,
                longitudeDelta: Dimensions.get("window").width / Dimensions.get("window").height * 0.0122
              }}
              style={styles.mapContainer}
            >
              <MapView.Marker coordinate={this.props.selectedPlace.location} />
            </MapView>
          </View>
        </View>
        <View style={styles.textAndButtonsContainer}>
          <View>
            <Text style={styles.placeName}>
                {this.props.selectedPlace.name}
            </Text>
          </View>
          <View>
            <TouchableOpacity onPress={this.placeDeletedHandler}>
              <View style={styles.deleteButton}>
                <Icon
                  size={30}
                  name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
                  color="red"
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 22,
    flex: 1
  },
  imageAndMapContainer: {
    flex: 2
  },
  textAndButtonsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  subContainer: {
    flex: 1
  },
  mapContainer: {
    // same as ...StyleSheet.absoluteFillObject
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  placeImage: {
    width: '100%',
    height: '100%'
  },
  placeName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28
  },
  deleteButton: {
    alignItems: 'center'
  },
  portraitContainer: {
    flexDirection: "column"
  },
  landscapeContainer: {
    flexDirection: "row"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace: key => dispatch(deletePlace(key))
  };
};

export default connect(null, mapDispatchToProps)(PlaceDetail);
