import { SET_PLACES, DELETE_PLACE_LOCAL } from '../actions/actionTypes';

const initialState ={
  places: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLACES:
      return {
        ...state,
        places: action.places
      };
    case DELETE_PLACE_LOCAL:
      return {
        ...state,
        places: state.places.filter(place => place.key !== action.key)
      };
    default:
      return state;
  }
};

export default reducer;
