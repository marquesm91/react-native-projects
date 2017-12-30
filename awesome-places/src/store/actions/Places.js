import { SET_PLACES, REMOVE_PLACE } from './actionTypes';
import { uiStartLoading, uiStopLoading } from './index';

export const addPlace = (placeName, location, image) => {
  return dispatch => {
    dispatch(uiStartLoading());
    fetch('https://us-central1-awesome-places-1514600820487.cloudfunctions.net/storeImage', {
      method: 'POST',
      body: JSON.stringify({
        image: image.base64
      })
    })
    .catch(err => {
      console.log(err);
      alert('Something went wrong, please try again!');
      dispatch(uiStopLoading());
    })
    .then(res => res.json())
    .then(parsedRes => {
      const placeData = {
        name: placeName,
        location: location,
        image: parsedRes.imageUrl
      };

      return fetch('https://awesome-places-1514600820487.firebaseio.com/places.json', {
        method: 'POST',
        body: JSON.stringify(placeData)
      })
    })
    .catch(err => {
      console.log(err);
      alert('Something went wrong, please try again!');
      dispatch(uiStopLoading());
    })
    .then(res => res.json())
    .then(parsedRes => {
      console.log(parsedRes);
      dispatch(uiStopLoading());
    });
  };
};

export const getPlaces = () => {
  return dispatch => {
    fetch('https://awesome-places-1514600820487.firebaseio.com/places.json')
    .catch(err => {
      console.log(err);
      alert('Something went wrong, sorry :/');
    })
    .then(res => res.json())
    .then(parsedRes => {
      const places = [];

      for (let key in parsedRes) {
        places.push({
          ...parsedRes[key],
          image: {
            uri: parsedRes[key].image
          },
          key: key
        });
      }
      console.log(places);
      dispatch(setPlaces(places))
    });
  };
};

export const setPlaces = places => {
  return {
    type: SET_PLACES,
    places: places
  };
};

export const deletePlace = (key) => {
    return dispatch => {
        dispatch(deletePlaceLocal(key));
        fetch("https://awesome-places-1514600820487.firebaseio.com/places/" + key + ".json", {
            method: "DELETE"
        })
        .catch(err => {
            alert("Something went wrong, sorry :/");
            console.log(err);
        })
        .then(res => res.json())
        .then(parsedRes => {
            console.log("Done!");
        });
    };
};

export const deletePlaceLocal = key => {
    return {
        type: DELETE_PLACE_LOCAL,
        key: key
    };
};
