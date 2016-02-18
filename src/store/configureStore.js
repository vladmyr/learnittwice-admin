import {Map} from "immutable";
import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";

import reducers from "../reducers";

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore);

export default () => {
  const store = createStoreWithMiddleware(reducers);

  if (module.hot){
    // enable hot module replacement for reducers
    module.hot.accept("../reducers", () => {
      const nextReducer = require("../reducers");
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}