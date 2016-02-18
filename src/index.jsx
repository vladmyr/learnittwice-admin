import React from "react";
import ReactDOM from "react-dom";
import {Router, Route} from "react-router";
import {Provider} from "react-redux";

import {routes} from "./routes";

/** app initial render */
ReactDOM.render(
  <Router>{routes}</Router>,
  document.getElementById("app")
);

//ReactDOM.render(
//  <Provider>
//    <Router>{routes}</Router>
//  </Provider>
//);