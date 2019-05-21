import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import logger from 'redux-logger';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState);

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});

function addLoggingToDispatch (store) {
    let dispatch = store.dispatch;
  return (action)=> {
    const logger = store => next => action => {
      console.log('Action received:', action);
      console.log('State pre-dispatch:', store.getState());

      let result = next(action);

      console.log('State post-dispatch', store.getState());

      return result;
    }
  }
}
