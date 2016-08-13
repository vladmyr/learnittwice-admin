'use strict';

import action from 'src/redux/actions/studyInboxActions';

const initialState = {
  id: 0,
  list: []
};

const studyInboxReducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default studyInboxReducer;