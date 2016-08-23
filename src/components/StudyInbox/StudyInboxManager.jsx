'use strict';

import React from 'react';
import { connect } from 'react-redux';
import * as _ from 'underscore';

import { initialState } from 'src/redux/reducers/studyInboxReducer';
import { setManagerHasChanges, setManagerData, setManagerPropData } from 'src/redux/actions/studyInboxActions';

import InputText from 'src/components/General/InputText';
import BtnGeneric from 'src/components/General/BtnGeneric';

class StudyInboxManager extends React.Component {
  constructor(props) {
    super(props);

    this.prevInboxData = _.omit(this.props.inboxData, 'id');
  }

  componentWillReceiveProps(newProps) {
    this.prevInboxData = _.omit(newProps.inboxData, 'id');
  }

  getState() {
    return this.state();
  }

  getHasChanges() {
    return !_.isEqual(this.state, this.prevInboxData);
  }

  shouldStateUpdateListener(prop, value) {
    this.props.setManagerPropData(prop, value);
  }

  render() {
    const getHasChangesBound = this.getHasChanges.bind(this);
    const shouldStateUpdateListenerBound = this.shouldStateUpdateListener.bind(this);

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
        onClick={getHasChangesBound}
      />
    </div>
  }
}

StudyInboxManager.defaultProps = initialState.get('Manager').toJS();

const mapStateToProps = (state, ownProps) => {
  return state.getIn(['StudyInbox', 'Manager']).toJS();
};

const mapDispatchToProps = {
  setManagerHasChanges,
  setManagerData,
  setManagerPropData
};

const StudyInboxManagerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StudyInboxManager);

export { StudyInboxManager, StudyInboxManagerContainer };