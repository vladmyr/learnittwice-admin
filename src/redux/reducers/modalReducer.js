'use strict';

import { Map, fromJS } from 'immutable';
import * as actions from 'src/redux/actions/modalActions'

const initialState = Map({
  action: Map({
    name: undefined,
    args: []
  }),
  type: undefined,
  title: undefined,
  message: undefined,
  labelReject: undefined,
  labelConfirm: undefined
});

const open = (state, action, type, props) => {
  return state
    .set('action', fromJS(action))
    .set('type', type)
    .merge(fromJS(props))
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.OPEN:
      return open(state, action.modalConfirmAction, action.modalType, action.modalProps);
    case actions.CLOSE:
      return initialState;
    default:
      return state;
  }
};

export { modalReducer, initialState }