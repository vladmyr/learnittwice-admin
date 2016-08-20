'use strict';

import { Promise } from 'bluebird';
import * as _ from 'underscore';

import StudyInboxCollection from 'src/backbone/collections/StudyInboxCollection';
import StudyInbox from 'src/backbone/models/StudyInbox';

export const REQ_MANY = 'STUDY_INBOX_REQ_MANY';
export const RES_MANY = 'STUDY_INBOX_RES_MANY';
export const REQ_ONE = 'STUDY_INBOX_REQ_ONE';
export const RES_ONE = 'STUDY_INBOX_RES_ONE';
export const REQ_CREATE = 'STUDY_INBOX_REQ_CREATE';
export const RES_CREATE = 'STUDY_INBOX_RES_CREATE';
export const REQ_UPDATE = 'STUDY_INBOX_REQ_UPDATE';
export const RES_UPDATE = 'STUDY_INBOX_RES_UPDATE';
export const REQ_DELETE = 'STUDY_INBOX_REQ_DELETE';
export const RES_DELETE = 'STUDY_INBOX_RES_DELETE';
export const MANAGER_OPEN = 'STUDY_INBOX_MANAGER_OPEN';


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

export const reqCreate = (data) => ({
  type: REQ_CREATE,
  data: data
});

export const resCreate = () => ({
  type: RES_CREATE
});

export const reqUpdate = (id, data) => ({
  type: REQ_UPDATE,
  id: id,
  data: data
});

export const resUpdate = () => ({
  type: RES_UPDATE
});

export const reqDelete = (id) => ({
  type: REQ_DELETE,
  id: id
});

export const resDelete = () => ({
  type: RES_DELETE
});

export const openManager = (id = null) => ({
  type: MANAGER_OPEN,
  id: id
});



/** THUNK ACTION CREATORS */

export const fetchList = (page = 0) => {
  return (dispatch, getState) => {
    let studyInboxCollection = new StudyInboxCollection();

    dispatch(reqMany(page));

    return studyInboxCollection
      .fetch({ data: { page: page } })
      .then((result) => {
        dispatch(resMany(page, result.obj.toJSON()));
        return;
      })
      .catch((e) => {
        // TODO: implement error handling
        console.error(e);
      });
  }
};