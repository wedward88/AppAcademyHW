import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const configureStore = (preloadedState = {}) => {
  const store = createStore(rootReducer, preloadedState);
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
}

export default configureStore;
