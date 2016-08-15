import {combineReducers} from 'redux';
import {Map} from 'immutable';
//import {routerReducer} from "react-router-redux";

import studyInboxReducer from './studyInboxReducer';

//const reducers = combineReducers({
//  studyInbox: studyInboxReducer
//});

const reducers = (state = Map({}), action) => {
  return Map({
    studyInbox: studyInboxReducer(state.get('studyInbox'), action)
  })
};

export default reducers;