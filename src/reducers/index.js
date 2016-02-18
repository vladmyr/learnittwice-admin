import {combineReducers} from "redux";
import {routeReducer} from "react-router-redux";

import test from "./test";

const reducers = combineReducers({
  test,
  routing: routeReducer
});

export default reducers;