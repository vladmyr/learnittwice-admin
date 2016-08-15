import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, browserHistory, hashHistory} from "react-router";
import {Provider} from "react-redux";

import * as config from "./config.json";
import routes from "./routes";
import configureStore from "./redux/store/configureStore";

import StudyInboxCollection from 'src/backbone/collections/StudyInboxCollection';
import * as TestActions from "./redux/actions/test";
import * as StudyInboxActions from 'src/redux/actions/studyInboxActions';

/** app globals */

/** app redux store */
const store = configureStore();

/** test */
//const studyInboxCollection = new StudyInboxCollection();
//
//studyInboxCollection.fetch().then((res) => {
//  console.log(res)
//}).catch((e) => {
//  console.error(e)
//});

/** app initial render */
ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={hashHistory} />
  </Provider>,
  document.getElementById("app")
);