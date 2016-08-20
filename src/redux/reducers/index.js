import {combineReducers} from 'redux';
import {Map} from 'immutable';
//import {routerReducer} from "react-router-redux";

import studyInboxReducer from './studyInboxReducer';

const reducers = (state = Map({}), action) => {
  return Map({
    StudyInbox: studyInboxReducer(state.get('StudyInbox'), action)
  })
};

export default reducers;