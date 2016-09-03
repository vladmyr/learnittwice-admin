'use strict';

export const OPEN = 'MODAL_OPEN';
export const CLOSE = 'MODAL_CLOSE';

// types of modals
export const TYPE = {
  ALERT: 'ALERT',
  CONFIRM: 'CONFIRM'
};

// modal's window class modifier
export const WINDOW_CLASS_MODIFIER = {
  WARNING: 'WARNING'
};



/** ACTION CREATORS */

export const open = (confirmAction = {}, modalType = TYPE.ALERT, modalProps) => {
  return {
    type: OPEN,
    modalType: modalType,
    modalConfirmAction: confirmAction,
    modalProps: modalProps
  }
};

export const close = () => {
  return {
    type: CLOSE
  }
};