'use strict';

import {Map, List, fromJS} from 'immutable';
import * as _ from 'underscore';
import * as actions from 'src/redux/actions/studyInboxActions';

const initialState = Map({
  Manager: Map({
    isVisible: false,
    hasChanges: false,
    inboxId: null,
    inboxData: {}
  }),
  listIds: List(),
  list: List(),
  page: 0
});

const setList = (state, page = 0, list = []) => {

  return state
    .set('page', page)
    .set('listIds', List(_.pluck(list, 'id')))
    .set('list', fromJS(list));
};

const setSelectedInbox = (state, id = null) => {
  let indexData = {};

  if (id) {
    let index = state.get('listIds').indexOf(id);

    if (index != -1) {
      indexData = state.getIn(['list', index]);
    }
  }

  return state
    .set('Manager', Map({
      isVisible: true,
      inboxId: id,
      inboxData: indexData
    }))
};

const studyInboxReducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.RES_MANY:
      return setList(state, action.page, action.list);
    case actions.MANAGER_OPEN:
      return setSelectedInbox(state, action.id);
    default:
      return state;
  }
};

export { studyInboxReducer, initialState };