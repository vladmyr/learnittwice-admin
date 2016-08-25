'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import * as _ from 'underscore';

import { initialState } from 'src/redux/reducers/studyInboxReducer';
import { save, openManager, resetManagerData, setManagerPropData } from 'src/redux/actions/studyInboxActions';
import { TYPE, open as openModal } from 'src/redux/actions/modalActions';

import InputText from 'src/components/General/InputText';
import BtnGeneric from 'src/components/General/BtnGeneric';

const defaultProps = {
  isNetProcessing: false,
  isVisible: false,
  hasChanges: false,
  inboxId: null,
  inboxData: {},
  prevInboxData: {}
};


class StudyInboxManager extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldStateUpdateListener(prop, value) {
    this.props.setManagerPropData(prop, value);
  }

  shouldLocalStateUpdateListener(prop, value) {
    const localState = _.clone(this.props.inboxData);

    localState[prop] = value;

    return this.setState({
      hasChanges: !_.isEqual(localState, this.props.prevInboxData)
    });
  }

  reset() {
    if (!this.props.hasChanges) {
      return;
    }

    this.props.openModal({
      name: 'resetManagerData',
      args: [this.props.inboxId]
    }, TYPE.CONFIRM, {
      title: 'You have not-persisted changes',
      message: 'Are you sure you want to continue? All not-persisted changes will be lost.'
    });
  }

  render() {
    const shouldStateUpdateListenerBound = this.shouldStateUpdateListener.bind(this);
    const shouldLocalStateUpdateListenerBound = this.shouldLocalStateUpdateListener.bind(this);
    const resetBound = this.reset.bind(this);
    const saveBound = this.props.save.bind(this);

    return <div className="study-inbox__manager">
      <h4>
        {this.props.inboxId
          ? this.props.prevInboxData.name
          : 'New inbox'
        }
      </h4>
      <InputText
        ref="name"
        title="Name"
        placeholder="Example Inbox"
        value={this.props.inboxData.name || ''}
        stateChangeListener={shouldStateUpdateListenerBound}
      />
      <BtnGeneric
        label="Reset"
        isDisabled={!this.props.hasChanges}
        onClick={resetBound}
      />
      <BtnGeneric
        label="Save"
        isDisabled={!this.props.hasChanges}
        onClick={saveBound}
      />
    </div>
  }
}

StudyInboxManager.defaultProps = _.defaults(
  initialState.get('Manager').toJS(),
  defaultProps
);

const mapStateToProps = (state, ownProps) => {
  const stateManager = state.getIn(['StudyInbox', 'Manager']).toJS();

  if (stateManager.inboxId) {
    const index = state.getIn(['StudyInbox','listIds']).indexOf(stateManager.inboxId);

    if (index != -1) {
      stateManager.prevInboxData = state.getIn(['StudyInbox', 'list', index]).toJS();
    }
  }

  return stateManager;
};

const mapDispatchToProps = {
  save,
  openModal,
  openManager,
  resetManagerData,
  setManagerPropData
};

const StudyInboxManagerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StudyInboxManager);

export { StudyInboxManager, StudyInboxManagerContainer };