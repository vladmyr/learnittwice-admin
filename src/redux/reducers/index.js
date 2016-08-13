import {combineReducers} from "redux";
import {routeReducer} from "react-router-redux";

import testReducer from "./test";
import studyInboxReducer from './studyInboxReducer';

const reducers = combineReducers({
  testReducer,
  studyInboxReducer,
  routing: routeReducer
});

export default reducers;