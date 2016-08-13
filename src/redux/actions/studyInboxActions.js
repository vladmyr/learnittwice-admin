'use strict';

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


/** ACTION CREATORS */

export const reqMany = (page = 0) => ({
  type: REQ_MANY,
  page: page
});

export const resMany = () => ({
  type: RES_MANY
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