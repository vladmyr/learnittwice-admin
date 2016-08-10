import {Map} from "immutable";
import {createStore, applyMiddleware, compose} from "redux";
import thunkMiddleware from "redux-thunk";
import {syncHistory} from "react-router-redux";

import reducers from "../reducers";

export default (initialState) => {
  const store = createStore(reducers, initialState, compose(
    applyMiddleware(thunkMiddleware)
    , typeof window !== "undefined" && window.devToolsExtension
      ? window.devToolsExtension()
      : f => f
  ));

  if (module.hot){
    // enable hot module replacement for reducers
    module.hot.accept("../reducers", () => {
      const nextReducer = require("../reducers");
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}