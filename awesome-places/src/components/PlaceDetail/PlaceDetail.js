import React from 'react';
import { Modal, View, Text, Image, Button, StyleSheet } from 'react-native';

const placeDetail = props => {
  let modalCotent = null;

  if (props.selectedPlace) {
    const { image, name } = props.selectedPlace;

    modalCotent = (
      <View>
        <Image source={image} style={styles.placeImage} />
        <Text style={styles.placeName}>{name}</Text> 
      </View>
    );
  }

  return (
    <Modal
      onRequestClose={props.onModalClosed}
      visible={props.selectedPlace !== null}
      animationType="slide"
    >
      <View style={styles.modalContainer}>
        {modalCotent}
        <View>
          <Button title="Delete" onPress={props.onItemDeleted} color="red" />
          <Button title="Close" onPress={props.onModalClosed} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28
  }
});

export default placeDetail;