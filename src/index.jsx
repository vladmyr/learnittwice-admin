import React from "react";
import ReactDOM from "react-dom";
import {Router, browserHistory} from "react-router";
import {Provider} from "react-redux";
import {Map} from "immutable";

import {routes} from "./routes";
import configureStore from "./store/configureStore";

/** app redux store */
const store = configureStore();
// store.dispatch(action);

/** app initial render */
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById("app")
);

//ReactDOM.render(
//  <Provider>
//    <Router>{routes}</Router>
//  </Provider>
//);