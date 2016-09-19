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
    itemData: Map(),
    itemPersistedData: Map()
  }),
  listIds: List(),
  list: List(),
  page: 0
});

const setIsNetProcessing = (state, bool = false) => {
  return state
    .setIn(['Manager', 'isNetProcessing'], bool);
};

const setList = (state, page = 0, list = []) => {
  return state
    .set('page', page)
    .set('listIds', List(_.pluck(list, 'id')))
    .set('list', fromJS(list))
};

const resOne = (state, item) => {
  const inboxData = fromJS(item);

  return state
    .setIn(['Manager', 'hasChanges'], false)
    .setIn(['Manager', 'itemId'], item.id)
    .mergeIn(['Manager', 'itemData'], inboxData)
    .mergeIn(['Manager', 'itemPersistedState'], inboxData);
};

const managerOpen = (state, id) => {
  return state
    .setIn(['Manager', 'itemId'], id)
    .setIn(['Manager', 'isVisible'], true)
};

const managerResetData = (state) => {

};

const managerSetPropData = (state, prop, value) => {
  // ToDo: track hasChanges - dehardcode value
  return state
    .setIn(['Manager', 'inboxData', prop], fromJS(value))
    .setIn(['Manager', 'hasChanges'], true);
};

const studyItemReducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.SET_LIST:
      return setList(state, action.page, action.list);
    case actions.REQ_ONE:
    case actions.REQ_UPSERT:
    case actions.REQ_DESTROY:
      return setIsNetProcessing(state, true);
    case actions.RES_ONE:
      return setIsNetProcessing(resOne(state, action.item), false);
    case actions.MANAGER_OPEN:
      return managerOpen(state, action.id);
    case actions.MANAGER_SET_PROP_DATA:
      return managerSetPropData(state, action.prop, action.value);
    default:
      return state;
  }
};

export { studyItemReducer };