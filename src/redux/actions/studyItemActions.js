'use strict';

import StudyItem from 'src/backbone/models/StudyItem';

/** ACTION TYPES */
export const SET_LIST = 'STUDY_ITEM_SET_LIST';
export const REQ_MANY = 'STUDY_ITEM_REQ_MANY';
export const RES_MANY = 'STUDY_ITEM_RES_MANY';
export const REQ_ONE = 'STUDY_ITEM_REQ_ONE';
export const RES_ONE = 'STUDY_ITEM_RES_ONE';
export const REQ_UPSERT = 'STUDY_ITEM_REQ_UPSERT';
export const RES_UPSERT = 'STUDY_ITEM_RES_UPSERT';
export const REQ_DESTROY = 'STUDY_ITEM_REQ_DESTROY';
export const RES_DESTROY = 'STUDY_ITEM_RES_DESTROY';
export const MANAGER_OPEN = 'STUDY_ITEM_MANAGER_OPEN';
export const MANAGER_RESET_DATA = 'STUDY_ITEM_MANAGER_RESET_DATA';
export const MANAGER_SET_PROP_DATA = 'STUDY_ITEM_MANAGER_SET_PROP_DATA';



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

export const reqUpsert = () => ({
  type: REQ_UPSERT
});

export const resUpsert = (data) => ({
  type: RES_UPSERT,
  data: data
});

export const reqDestroy = (id) => ({
  type: REQ_DESTROY,
  id: id
});

export const resDestroy = (id) => ({
  type: RES_DESTROY,
  id: id
});

export const openManager = (id) => ({
  type: MANAGER_OPEN,
  id: id
});

export const setManagerPropData = (prop, value) => ({
  type: MANAGER_SET_PROP_DATA,
  prop: prop,
  value: value
});

export const resetManagerData = () => ({
  type: MANAGER_RESET_DATA
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

export const save = () => {
  return (dispatch, getState) => {
    const state = getState();
    let studyItemDescriptor = state.getIn(['StudyItem', 'Manager', 'itemData']).toJS();
    studyItemDescriptor.studyInboxId = state.getIn(['StudyInbox', 'Manager', 'inboxId']);
    const studyItem = new StudyItem(studyItemDescriptor);

    dispatch(reqUpsert());

    return studyItem
      .save()
      .then((result) => {
        return dispatch(resUpsert(result.obj.toJSON()));
      })
      .catch((e) => {
        // ToDo: implement error handling
        console.error(e);
      })
  }
};

export const destroy = () => {
  return (dispatch, getState) => {
    const state = getState();
    const itemId = state.getIn(['StudyItem', 'Manager', 'itemId']);
    const studyItem = new StudyItem({ id: itemId });

    if (!itemId) {
      return
    }

    dispatch(reqDestroy(id));

    return studyItem
      .destroy()
      .then((result) => {
        return dispatch(resDestroy(result.obj.id));
      })
      .catch((e) => {
        // ToDo: implement error handling
        console.error(e);
      })
  }
};