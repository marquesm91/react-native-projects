import { SET_PLACES, REMOVE_PLACE, DELETE_PLACE_LOCAL } from './actionTypes';
import { uiStartLoading, uiStopLoading, authGetToken } from './index';

export const addPlace = (placeName, location, image) => {
  return dispatch => {
    let authToken;
    dispatch(uiStartLoading());
    dispatch(authGetToken())
      .catch(() => {
        alert('No valid token found!');
      })
      .then(token => {
        authToken = token;
        return fetch('https://us-central1-awesome-places-1514600820487.cloudfunctions.net/storeImage', {
          method: 'POST',
          body: JSON.stringify({
            image: image.base64
          }),
          headers: {
            'Authorization': 'Bearer ' + authToken
          }
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

        return fetch('https://awesome-places-1514600820487.firebaseio.com/places.json?auth=' + authToken, {
          method: 'POST',
          body: JSON.stringify(placeData)
        })
      })
      .then(res => res.json())
      .then(parsedRes => {
        console.log(parsedRes);
        dispatch(uiStopLoading());
      })
      .catch(err => {
        console.log(err);
        alert('Something went wrong, please try again!');
        dispatch(uiStopLoading());
      });
  };
};

export const getPlaces = () => {
  return dispatch => {
    dispatch(authGetToken())
      .catch(() => {
        alert('No valid token found!');
      })
      .then(token => {
        return fetch('https://awesome-places-1514600820487.firebaseio.com/places.json?auth=' + token);
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
      })
      .catch(err => {
        console.log(err);
        alert('Something went wrong, sorry :/');
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
      dispatch(authGetToken())
        .catch(() => {
          alert('No valid token found!');
        })
        .then(token => {
          dispatch(deletePlaceLocal(key));
          return fetch('https://awesome-places-1514600820487.firebaseio.com/places/' + key + '.json?auth=' + token, {
              method: "DELETE"
          })
        })
        .then(res => res.json())
        .then(parsedRes => {
            console.log("Done!");
        })
        .catch(err => {
            alert("Something went wrong, sorry :/");
            console.log(err);
        });
    };
};

export const deletePlaceLocal = key => {
    return {
        type: DELETE_PLACE_LOCAL,
        key: key
    };
};
