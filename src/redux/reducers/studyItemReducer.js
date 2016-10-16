'use strict';

import { Map, List, fromJS } from 'immutable';
import * as _ from 'underscore';
import * as actions from 'src/redux/actions/studyItemActions';

const QUESTION_TYPE = {
  KEYBOARD_TYPE: 'keyboardType',
  SELECT_SINGLE: 'selectSingle',
  SELECT_MULTIPLE: 'selectMultiple',
  SELECT_SEQUENCE: 'selectSequence'
};

const QUESTION_COMPONENT_TYPE = {
  TEXT: 'text',
  IMAGE: 'mediaImage',
  AUDIO: 'mediaAudio',
  LEMMA: 'refLemma',
  SYNSET: 'refSynset'
};

const initialState = Map({
  Manager: Map({
    isNetProcessing: false,
    isVisible: false,
    hasChanges: false,
    itemId: null,
    itemData: Map({
      questionType: QUESTION_TYPE.KEYBOARD_TYPE,
      question: Map({
        type: QUESTION_COMPONENT_TYPE.TEXT,
        content: ''
      }),
      answer: Map({
        type: QUESTION_COMPONENT_TYPE.TEXT,
        content: ''
      })
    }),
    itemPersistedState: Map()
  }),
  listIds: List(),
  list: List(),
  page: 0
});

/**
 * Get item by its id
 * @param   {Immutable.Map} state
 * @param   {String} id
 * @returns {Immutable.Map}
 * @private
 */

const _getItemById = (state, id) => {
  let item = Map();

  if (id) {
    let index = state.get('listIds').indexOf(id);

    if (index != -1) {
      item = state.getIn(['list', index]);
    }
  }

  return item;
};


/**
 * Deep comparison of two variables
 * @param   {*}       objA
 * @param   {*}       objB
 * @param   {Boolean} [hasChanges=false]
 * @returns {Boolean}
 * @private
 */
const _calcRecursiveComparison = (objA, objB, hasChanges = false) => {
  if (hasChanges) {
    // true - skip
    return hasChanges;
  } else if ((typeof objA != 'object' && typeof objB != 'object')) {
    // non Object data types
    return objA != objB;
  } else {
    // Object (Array) data types
    return Object.keys(objA).reduce((prevValue, key) => {
      if (prevValue) {
        return prevValue
      } else {
        const valA = objA[key];
        const valB = objB[key];

        if (valA && valB && typeof valA == 'object' && typeof valB == 'object') {
          // Object (Array) data types
          return _calcRecursiveComparison(valA, valB, prevValue);
        } else {
          // rest of data types
          return valA != valB;
        }
      }
    }, hasChanges);
  }
};

const setHasChanges = (state) => {
  const itemPersistedState = state.getIn(['Manager', 'itemPersistedState']).toJS();
  const itemState = state.getIn(['Manager', 'itemData']).toJS();
  // FIXME: handle '_id' property
  const hasChanges = _calcRecursiveComparison(itemState, itemPersistedState);
  return state
    .setIn(['Manager', 'hasChanges'], hasChanges);
};

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

const reqOne = (state, id) => {
  const item = _getItemById(state, id);

  if (!item) {
    return state
  }

  return state
    .mergeIn(['Manager', 'itemPersistedState'], item);
};

const resOne = (state, item) => {
  const itemData = fromJS(item);

  return state
    .setIn(['Manager', 'hasChanges'], false)
    .setIn(['Manager', 'itemId'], item.id)
    .mergeIn(['Manager', 'itemData'], itemData)
    .mergeIn(['Manager', 'itemPersistedState'], itemData);
};

const managerOpen = (state, id) => {
  return state
    .setIn(['Manager', 'itemId'], id)
    .setIn(['Manager', 'isVisible'], true)
};

const managerResetData = (state) => {
  let newState = state
    .setIn(
      ['Manager', 'itemData'],
      initialState.getIn(['Manager', 'itemData'])
    );

  if (state.getIn(['Manager', 'itemId'])) {
    return newState
      .mergeIn(
        ['Manager', 'itemData'],
        state.getIn(['Manager', 'itemPersistedState'])
      );
  } else {
    return newState;
  }
};

const managerSetPropData = (state, prop, value) => {
  // handle nested props
  const propPath = ['Manager', 'itemData'].concat(prop.split('.'));
  return state
    .setIn(propPath, fromJS(value));
};

const studyItemReducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.SET_LIST:
      return setList(state, action.page, action.list);
    case actions.REQ_ONE:
      return setIsNetProcessing(reqOne(state, action.id), true);
    case actions.REQ_UPSERT:
    case actions.REQ_DESTROY:
      return setIsNetProcessing(state, true);
    case actions.RES_ONE:
      return setIsNetProcessing(resOne(state, action.item), false);
    case actions.MANAGER_OPEN:
      return managerOpen(state, action.id);
    case actions.MANAGER_RESET_DATA:
      return managerResetData(state);
    case actions.MANAGER_SET_PROP_DATA:
      return setHasChanges(managerSetPropData(state, action.prop, action.value));
    default:
      return state;
  }
};

export { studyItemReducer, QUESTION_TYPE, QUESTION_COMPONENT_TYPE };