'use strict';

import React from 'react';
import {connect} from 'react-redux';
import './StudyInbox.scss';

import {reqOne, list} from 'src/redux/actions/studyInboxActions';
import StudyInboxList from './StudyInboxList';

class StudyInbox extends React.Component {
  componentDidMount() {
    this.props.list();
  }

  componentDidUpdate() {

  }

  render() {
    return <div>
      <h4>StudyInbox</h4>
      <StudyInboxList />
    </div>
  }
}

const mapStateToProps = (state, ownProps) => ({
  state
});

const mapDispatchToProps = {
  list: list
};

const StudyInboxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StudyInbox);

export { StudyInbox, StudyInboxContainer };