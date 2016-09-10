import {Map} from 'immutable';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

import reducers from '../reducers';

const configureStore = (initialState) => {
  const store = createStore(reducers, initialState, compose(
    applyMiddleware(thunk, promiseMiddleware())
    , typeof window !== 'undefined' && window.devToolsExtension
      ? window.devToolsExtension()
      : f => f
  ));


  if (module.hot){
    // enable hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};

export default configureStore;