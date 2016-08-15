'use strict';

import {Map, List, fromJS} from 'immutable';
import * as actions from 'src/redux/actions/studyInboxActions';

const initialState = Map({
  list: List(),
  page: 0,
  isManagerVisible: false,
  inboxId: 0,
  inbox: null
});

const setList = (state, page = 0, list = []) => {
  return state
    .set('page', page)
    .set('list', fromJS(list));
};

const studyInboxReducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.RES_MANY:
      return setList(state, action.page, action.list);
    default:
      return state;
  }
};

export default studyInboxReducer;