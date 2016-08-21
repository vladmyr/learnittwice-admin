'use strict';

export const OPEN = 'MODAL_OPEN';
export const CLOSE = 'MODAL_CLOSE';

// types of modals
export const TYPE = {
  ALERT: 'ALERT',
  CONFIRM: 'CONFIRM'
};

export const open = (modalType = TYPE.ALERT, modalProps = {}) => {
  return {
    type: OPEN,
    modalType: modalType,
    modalProps: modalProps
  }
};

export const close = () => {
  return {
    type: CLOSE
  }
};