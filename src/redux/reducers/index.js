import { combineReducers } from 'redux';
import { Map } from 'immutable';
//import {routerReducer} from "react-router-redux";

import { studyInboxReducer } from './studyInboxReducer';
import { studyItemReducer } from './studyItemReducer';
import { modalReducer } from './modalReducer';

const reducers = (state = Map(), action) => {
  return Map({
    StudyInbox: studyInboxReducer(state.get('StudyInbox'), action),
    StudyItem: studyItemReducer(state.get('StudyItem'), action),
    Modal: modalReducer(state.get('Modal'), action)
  })
};

export default reducers;