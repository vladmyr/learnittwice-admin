'use strict';

import StudyItem from 'src/backbone/models/StudyItem';

/** ACTION TYPES */
export const SET_LIST = 'STUDY_ITEM_SET_LIST';
export const REQ_MANY = 'STUDY_ITEM_REQ_MANY';
export const RES_MANY = 'STUDY_ITEM_RES_MANY';
export const REQ_ONE = 'STUDY_ITEM_REQ_ONE';
export const RES_ONE = 'STUDY_ITEM_RES_ONE';
export const MANAGER_OPEN = 'STUDY_ITEM_MANAGER_OPEN';
export const MANAGER_RESET_DATA = 'STUDY_ITEM_MANAGER_RESET_DATA';



/** ACTION CREATORS */
export const setList = (page = 0, list =[]) => ({
  type: SET_LIST,
  page: page,
  list: list
});

export const reqMany = (page = 0) => ({
  type: REQ_MANY,
  page: page
});

export const resMany = (list) => ({
  type: RES_MANY,
  list: list
});

export const reqOne = (id) => ({
  type: REQ_ONE,
  id: id
});

export const resOne = (item) => ({
  type: RES_ONE,
  item: item
});

export const openManager = (id) => ({
  type: MANAGER_OPEN,
  id: id
});



/** THUNK ACTION CREATORS */

export const fetchList = (page = 0) => {
  return (dispatch, getState) => {
    //const studyItemCollection = new StudyItemCollection();
    dispatch(reqMany(page));
  }
};

export const fetch = (id) => {
  return (dispatch) => {
    const studyItem = new StudyItem({ id: id });

    dispatch(reqOne(id));

    return studyItem
      .fetch()
      .then((result) => {
        dispatch(resOne(result.obj.toJSON()))
      })
      .catch((e) => {
        // ToDo: implement error handling
        console.error(e);
      })
  }
};

export const fetchOpenManager = (id) => {
  return (dispatch) => {
    dispatch(fetch(id));
    dispatch(openManager(id));
  }
};