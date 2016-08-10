import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, hashHistory} from "react-router";
import {Provider} from "react-redux";
import {Map} from "immutable";

import * as config from "./config.json";
import routes from "./routes";
import configureStore from "./redux/store/configureStore";

import {App} from "./components/app/App";
import {TestContainer} from './components/test/Test';

import * as TestActions from "./redux/actions/test";

/** app globals */

/** app redux store */
const store = configureStore();

/** app initial render */
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById("app")
);