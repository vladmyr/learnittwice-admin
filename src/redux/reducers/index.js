import {combineReducers} from "redux";
import {routeReducer} from "react-router-redux";

import testReducer from "./test";

const reducers = combineReducers({
  testReducer,
  routing: routeReducer
});

export default reducers;