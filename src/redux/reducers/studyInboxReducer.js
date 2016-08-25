'use strict';

import { Map, List, fromJS } from 'immutable';
import * as _ from 'underscore';
import * as actions from 'src/redux/actions/studyInboxActions';

const initialState = Map({
  Manager: Map({
    isNetProcessing: false,
    isVisible: false,
    hasChanges: false,
    inboxId: null,
    inboxData: {}
  }),
  listIds: List(),
  list: List(),
  page: 0
});


/**
 * Get inbox by its id
 * @param   {Immutable.Map} state
 * @param   {String} id
 * @returns {Immutable.Map}
 * @private
 */

const _getInboxById = (state, id) => {
  let inbox = Map();

  if (id) {
    let index = state.get('listIds').indexOf(id);

    if (index != -1) {
      inbox = state.getIn(['list', index]);
    }
  }

  return inbox;
};

const setIsNetProcessing = (state, bool = false) => {
  return state
    .setIn(['Manager', 'isNetProcessing'], bool);
};

const setList = (state, page = 0, list = []) => {
  return state
    .set('page', page)
    .set('listIds', List(_.pluck(list, 'id')))
    .set('list', fromJS(list));
};

const setSelectedInbox = (state, id) => {
  // prevent selecting already selected inbox
  if (id == state.getIn(['Manager', 'inboxId'])) {
    return state;
  }

  let inboxData = _getInboxById(state, id);

  return state
    .set('Manager', Map({
      isVisible: true,
      inboxId: id,
      inboxData: inboxData
    }))
};

const resetManagerData = (state, id) => {
  if (!state.getIn(['Manager', 'hasChanges'])) {
    return state
  }

  return state
    .setIn(['Manager', 'hasChanges'], false)
    .setIn(['Manager', 'inboxData'], _getInboxById(state, id));

};

const setManagerPropData = (state, prop, value) => {
  const inbox = _getInboxById(state, state.getIn(['Manager', 'inboxId']));
  const hasChanges = (inbox.get(prop) != value);
  return state
    .setIn(['Manager', 'inboxData', prop], fromJS(value))
    .setIn(['Manager', 'hasChanges'], hasChanges);
};

const resUpsert = (state, data) => {
  return state;
};

const studyInboxReducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.RES_MANY:
      return setList(state, action.page, action.list);
    case actions.REQ_UPSERT:
    case actions.REQ_DELETE:
      return setIsNetProcessing(state, true);
    case actions.RES_UPSERT:
      return setIsNetProcessing(resUpsert(state, action.data), false);
    case actions.MANAGER_OPEN:
      return setSelectedInbox(state, action.id);
    case actions.MANAGER_RESET_DATA:
      return resetManagerData(state, action.id);
    case actions.MANAGER_SET_PROP_DATA:
      return setManagerPropData(state, action.prop, action.value);
    default:
      return state;
  }
};

export { studyInboxReducer, initialState };