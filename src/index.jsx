import React from "react";
import ReactDOM from "react-dom";
import {Router, Route} from "react-router";
import {Provider} from "react-redux";

import {App} from "./components/App";
import {Test} from "./components/Test";

/** app routes */
const routes = <Route component={App}>
  <Route path="/" component={Test} />
</Route>;

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