import { createStore, combineReducers, compose } from 'redux';

import placesReducer from './reducers/Places';

const rootReducer = combineReducers({
  places: placesReducer
});

let composeEnhancers = compose;

// exposed by React Native if you are in Devlopment Mode
if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers());
};

export default configureStore;
