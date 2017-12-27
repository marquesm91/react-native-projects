<<<<<<< HEAD
import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ListItem from '../ListItem/ListItem';

const placeList = (props) => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.places}
      renderItem={info => (
        <ListItem
          placeName={info.item.name}
          placeImage={info.item.image}
          onItemPressed={() => props.onItemDeleted(info.item.id)}
        />
      )}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  }
});

export default placeList;
=======
import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ListItem from '../ListItem/ListItem';

const placeList = (props) => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.places}
      renderItem={info => (
        <ListItem
          placeName={info.item.name}
          placeImage={info.item.image}
          onItemPressed={() => props.onItemSelected(info.item.key)}
        />
      )}
      keyExtractor={item => item.key}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  }
});

export default placeList;
>>>>>>> a2d90e05fe3ff12facf1400c229170756e9adec9
