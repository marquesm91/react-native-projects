import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

const wDim = Dimensions.get('window');
const fixedWidth = Math.round(wDim.width * wDim.scale * 0.8);

class SideDrawer extends Component {
  render() {
    return (
      <View
        style={[
          styles.container,
          { width: fixedWidth }
        ]}
      >
        <Text>
          SideDrawer
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: 'white'
  }
});

export default SideDrawer;
