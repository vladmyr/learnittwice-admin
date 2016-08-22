'use strict';

import { Map, fromJS } from 'immutable';
import * as actions from 'src/redux/actions/modalActions'

const initialState = Map({
  action: Map(),
  modalType: undefined,
  modalProps: undefined
});

const show = (state, action, type, props) => {
  return state
    .set('action', fromJS(action))
    .set('modalType', type)
    .set('modalProps', fromJS(props))
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.OPEN:
      return show(state, action.modalConfirmAction, action.modalType, action.modalProps);
    case actions.CLOSE:
      return initialState;
    default:
      return state;
  }
};

export { modalReducer, initialState }