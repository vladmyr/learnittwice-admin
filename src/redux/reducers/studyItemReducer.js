'use strict';

import { Map, List, fromJS } from 'immutable';
import * as _ from 'underscore';
import * as actions from 'src/redux/actions/studyItemActions';

const initialState = Map({
  Manager: Map({
    isNetProcessing: false,
    isVisible: false,
    hasChanges: false,
    itemId: null,
    itemData: Map()
  }),
  listIds: List(),
  list: List(),
  page: 0
});

const setList = (state, page = 0, list = []) => {
  return state
    .set('page', page)
    .set('listIds', List(_.pluck(list, 'id')))
    .set('list', fromJS(list))
};

const studyItemReducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.SET_LIST:
      return setList(state, action.page, action.list);
    default:
      return state;
  }

};

export { studyItemReducer };