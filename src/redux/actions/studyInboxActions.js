'use strict';

import { Promise } from 'bluebird';
import * as _ from 'underscore';

import StudyInboxCollection from 'src/backbone/collections/StudyInboxCollection';
import StudyInbox from 'src/backbone/models/StudyInbox';

export const REQ_MANY = 'STUDY_INBOX_REQ_MANY';
export const RES_MANY = 'STUDY_INBOX_RES_MANY';
export const REQ_ONE = 'STUDY_INBOX_REQ_ONE';
export const RES_ONE = 'STUDY_INBOX_RES_ONE';
export const REQ_UPSERT = 'STUDY_INBOX_REQ_UPSERT';
export const RES_UPSERT = 'STUDY_INBOX_RES_UPSERT';
export const REQ_DESTROY = 'STUDY_INBOX_REQ_DESTROY';
export const RES_DESTROY = 'STUDY_INBOX_RES_DESTROY';
export const MANAGER_OPEN = 'STUDY_INBOX_MANAGER_OPEN';
export const MANAGER_CLOSE = 'STUDY_INBOX_MANAGER_CLOSE';
export const MANAGER_HAS_CHANGES = 'STUDY_INBOX_MANAGER_HAS_CHANGES';
export const MANAGER_SET_DATA = 'STUDY_INBOX_MANAGER_SET_DATA';
export const MANAGER_RESET_DATA = 'STUDY_INBOX_MANAGER_RESET_DATA';
export const MANAGER_SET_PROP_DATA = 'STUDY_INBOX_MANAGER_SET_PROP_DATA';




/** ACTION CREATORS */

export const reqMany = (page = 0) => ({
  type: REQ_MANY,
  page: page
});

export const resMany = (page = 0, list) => ({
  type: RES_MANY,
  page: page,
  list: list
});

export const reqOne = (id) => ({
  type: REQ_ONE,
  id: id
});

export const resOne = () => ({
  type: RES_ONE
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

export const closeManager = () => ({
  type: MANAGER_CLOSE
});

export const setManagerHasChanges = (bool = false) => ({
  type: MANAGER_HAS_CHANGES,
  bool: bool
});

export const resetManagerData = (id) => ({
  type: MANAGER_RESET_DATA,
  id: id
});

export const setManagerPropData = (prop, value) => ({
  type: MANAGER_SET_PROP_DATA,
  prop: prop,
  value: value
});



/** THUNK ACTION CREATORS */

export const fetchList = (page = 0) => {
  return (dispatch, getState) => {
    const studyInboxCollection = new StudyInboxCollection();

    dispatch(reqMany(page));

    return studyInboxCollection
      .fetch({ data: { page: page } })
      .then((result) => {
        return dispatch(resMany(page, result.obj.toJSON()));
      })
      .catch((e) => {
        // TODO: implement error handling
        console.error(e);
      });
  }
};

export const save = () => {
  return (dispatch, getState) => {
    const state = getState();
    const studyInbox = new StudyInbox(state.getIn(['StudyInbox', 'Manager', 'inboxData']).toJS());

    dispatch(reqUpsert());

    return studyInbox
      .save()
      .then((result) => {
        return dispatch(resUpsert(result.obj.toJSON()));
      })
      .catch((e) => {
        // TODO: implement error handling
        console.error(e)
      })
  }
};

export const destroy = () => {
  return (dispatch, getState) => {
    const state = getState();
    const inboxId = state.getIn(['StudyInbox', 'Manager', 'inboxId']);
    const studyInbox = new StudyInbox({ id: inboxId });

    if (!inboxId) {
      return
    }

    dispatch(reqDestroy(inboxId));

    return studyInbox
      .destroy()
      .then((result) => {
        return dispatch(resDestroy(result.obj.id))
      })
      .catch((e) => {
        // TODO: implement error handling
        console.error(e);
      })
  }
};