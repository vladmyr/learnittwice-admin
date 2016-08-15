import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";

import testReducer from "./test";
import studyInboxReducer from './studyInboxReducer';

const reducers = combineReducers({
  //testReducer,
  studyInbox: studyInboxReducer,
  routing: routerReducer
});

export default reducers;