import {
  ADD_PLACE,
  DELETE_PLACE
} from '../actions/actionTypes';

const initialState ={
  places: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: [
          ...state.places, {
            key: Math.random(),
            name: action.placeName,
            image: {
              uri: 'http://images1.aystatic.com/articles/106/49054_home_hero.jpg?1429245631'
            }
          }
        ]
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => place.key !== action.placeKey)
      };
    default:
      return state;
  }
};

export default reducer;
