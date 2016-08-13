'use strict';

import React from 'react';
import {connect} from 'react-redux';
import './StudyInbox.scss';

import StudyInboxList from './StudyInboxList';

const StudyInbox = React.createClass({
  return() {
    return <StudyInboxList />
  }
});

const mapStateToProps = (state, ownProps) => ({
  state
});

const mapDispatchToProps = (dispatch) => ({

});

const StudyInboxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StudyInbox);

export { StudyInbox, StudyInboxContainer };