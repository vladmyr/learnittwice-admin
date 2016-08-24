'use strict';

import React from 'react';
import { connect } from 'react-redux';
import * as _ from 'underscore';

import { initialState } from 'src/redux/reducers/studyInboxReducer';
import { openManager, resetManagerData, setManagerPropData } from 'src/redux/actions/studyInboxActions';
import { TYPE, open as openModal } from 'src/redux/actions/modalActions';

import InputText from 'src/components/General/InputText';
import BtnGeneric from 'src/components/General/BtnGeneric';

class StudyInboxManager extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldStateUpdateListener(prop, value) {
    this.props.setManagerPropData(prop, value);
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
    const resetBound = this.reset.bind(this);

    return <div className="study-inbox__manager">
      <h4>
        {this.props.inboxId
          ? this.props.inboxData.name
          : 'New inbox'
        }
      </h4>
      <InputText
        ref="name"
        title="Name"
        placeholder="Example Inbox"
        value={this.props.inboxData.name || ''}
        shouldStateUpdateListener={shouldStateUpdateListenerBound}
      />
      <BtnGeneric
        label="Reset"
        onClick={resetBound}
      />
    </div>
  }
}

StudyInboxManager.defaultProps = initialState.get('Manager').toJS();

const mapStateToProps = (state, ownProps) => {
  return state.getIn(['StudyInbox', 'Manager']).toJS();
};

const mapDispatchToProps = {
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