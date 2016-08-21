'use strict';

import { Map, fromJS } from 'immutable';
import * as actions from 'src/redux/actions/modalActions'

const initialState = Map({
  type: null,
  props: Map()
});

const show = (state, type, props) => {
  return state
    .set('type', type)
    .set('props', fromJS(props))
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.OPEN:
      return show(state, action.modalType, action.modalProps);
    case actions.CLOSE:
      return initialState;
    default:
      return state;
  }
};

export { modalReducer, initialState }