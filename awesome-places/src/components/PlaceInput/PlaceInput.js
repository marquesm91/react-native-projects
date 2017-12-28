import React from 'react';
//import { StyleSheet, View, TextInput, Button } from 'react-native';
import DefaultInput from '../UI/DefaultInput/DefaultInput';

const placeInput = props => (
  <DefaultInput
    placeholder="Place name"
    value={props.placeName}
    onChangeText={props.onChangeText}
  />
);

export default placeInput;
