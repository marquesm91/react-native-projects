import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';

import PlacesReducer from './reducers/Places';
import UIReducer from './reducers/UI';
import AuthReducer from './reducers/Auth';

const rootReducer = combineReducers({
  places: PlacesReducer,
  ui: UIReducer,
  auth: AuthReducer
});

let composeEnhancers = compose;

// exposed by React Native if you are in Devlopment Mode
if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
};

export default configureStore;
