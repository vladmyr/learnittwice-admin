'use strict';

//import StudyItemCollection from './src/backbone/collections/StudyItemCollection';

/** ACTION TYPES */
export const REQ_MANY = 'STUDY_ITEM_REQ_MANY';
export const RES_MANY = 'STUDY_ITEM_RES_MANY';
export const REQ_ONE = 'STUDY_ITEM_REQ_ONE';
export const RES_ONE = 'STUDY_ITEM_RES_ONE';



/** ACTION CREATORS */
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



/** THUNK ACTION CREATORS */

export const fetchList = (page = 0) => {
  return (dispatch, getState) => {
    //const studyItemCollection = new StudyItemCollection();
    dispatch(reqMany(page));
  }
};