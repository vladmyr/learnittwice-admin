'use strict';

import React from 'react';
import { connect } from 'react-redux';
import * as _ from 'underscore';

import { initialState } from 'src/redux/reducers/studyInboxReducer';
import {} from 'src/redux/actions/studyInboxActions';

import InputText from 'src/components/General/InputText';
import BtnGeneric from 'src/components/General/BtnGeneric';

class StudyInboxManager extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.inboxData;
  }

  render() {
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
      />
      <BtnGeneric />
    </div>
  }
}

StudyInboxManager.defaultProps = initialState.get('Manager').toJS();

export default StudyInboxManager;