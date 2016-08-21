import { combineReducers } from 'redux';
import { Map } from 'immutable';
//import {routerReducer} from "react-router-redux";

import { studyInboxReducer } from './studyInboxReducer';
import { modalReducer } from './modalReducer';

const reducers = (state = Map({}), action) => {
  return Map({
    StudyInbox: studyInboxReducer(state.get('StudyInbox'), action),
    Modal: modalReducer(state.get('Modal'), action)
  })
};

export default reducers;