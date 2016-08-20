'use strict';

import React from 'react';
import { connect } from 'react-redux';

import InputText from 'src/components/General/InputText';
import BtnGeneric from 'src/components/General/BtnGeneric';

const defaultProps = {
  inbox: {
    isPersisted: false,
    title: '',
    url: ''
  }
};

class StudyInboxManager extends React.Component {
  render() {
    const props = {
      title: 'Name',
      placeholder: 'Input collection name'
    };

    return <div className="study-inbox__manager">
      <h4>{this.props.inbox.isPersisted ? this.props.inbox.title : 'New inbox'}</h4>
      <InputText {...props} />
      <BtnGeneric />
    </div>
  }
}

StudyInboxManager.defaultProps = defaultProps;

export default StudyInboxManager;