import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const placeInput = (props) => (
  <View style={styles.inputContainer}>
    <TextInput 
      style={styles.placeInput}
      placeholder={'An awesome place!'}
      value={props.placeName}
      onChangeText={props.placeNameChangedHandler}
    />
    <Button
      style={styles.placeButton}
      title={'Add'}
      onPress={props.placeSubmitHandler}
    />  
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15
  },
  placeInput: {
    width: '70%',
  },
  placeButton: {
    width: '30%'
  }
});

export default placeInput;
