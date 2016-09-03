'use strict';

import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { TYPE, WINDOW_CLASS_MODIFIER, close } from 'src/redux/actions/modalActions';
import {
  openManager,
  resetManagerData,
  destroy
} from 'src/redux/actions/studyInboxActions';

import BtnGeneric from 'src/components/General/BtnGeneric';

const defaultProps = {
  action: {
    name: undefined,
    args: []
  },
  classNameModifier: undefined,
  type: undefined,
  title: 'Title',
  message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium volutpat lacus ac fermentum. Mauris venenatis mollis ligula. Fusce luctus tincidunt sem a gravida. Proin tempus dui at quam accumsan elementum. Sed laoreet ligula eget tellus tincidunt, a porta metus viverra. Nullam id libero semper, commodo tortor sed, porttitor ipsum. Curabitur venenatis faucibus felis eget lacinia. Mauris eleifend id massa vitae malesuada. In vitae tortor commodo, consectetur orci vitae, tristique nisi. Vivamus condimentum ac purus sit amet lacinia. Integer vulputate vitae augue vel pharetra. Vivamus sollicitudin scelerisque augue. Proin ultricies placerat leo. Aenean aliquet elementum orci non lacinia.',
  labelReject: 'Go back',
  labelConfirm: 'OK'
};

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  actClose() {
    this.props.closeModal();
  }

  actConfirm() {
    const dispatch = this.props[this.props.action.name];

    if (typeof dispatch == 'function') {
      this.actClose();
      dispatch.apply(dispatch, this.props.action.args);
    }
  }

  render() {
    const classNameWindow = classNames('c-modal__window', {
      'c-modal__window--warning': WINDOW_CLASS_MODIFIER.WARNING == this.props.classNameModifier
    });

    const actCloseBound = this.actClose.bind(this);
    const actConfirmBound = this.actConfirm.bind(this);

    let modalFooter = null;

    if (!this.props.type) {
      return null;
    }

    switch (this.props.type) {
      case TYPE.ALERT:
        modalFooter = <BtnGeneric
          label={this.props.labelConfirm}
          onClick={actCloseBound}
        />;
        break;
      case TYPE.CONFIRM:
        modalFooter = <div>
          <BtnGeneric
            label={this.props.labelReject}
            onClick={actCloseBound}
          />
          <BtnGeneric
            label={this.props.labelConfirm}
            onClick={actConfirmBound}
          />
        </div>;
        break;
    }

    return <div className="c-modal">
      <div className="c-modal__overlay"></div>
      <div className={classNameWindow}>
        <h2 className="c-modal__title">
          {this.props.title}
        </h2>
        <p className="c-modal__message">
          {this.props.message}
        </p>
        <div className="c-modal__footer">
          {modalFooter}
        </div>
      </div>
    </div>;
  }
}

Modal.defaultProps = defaultProps;

const mapStateToProps = (state, ownProps) => {
  return state.get('Modal').toJS();
};

const mapDispatchToProps = {
  closeModal: close,
  openManager,
  resetManagerData,
  destroyStudyInbox: destroy
};

const ModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);

export { Modal, ModalContainer }