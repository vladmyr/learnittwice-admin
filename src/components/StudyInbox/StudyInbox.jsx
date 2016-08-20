'use strict';

import React from 'react';
import { connect } from 'react-redux';

import { reqOne, fetchList } from 'src/redux/actions/studyInboxActions';
import StudyInboxList from './StudyInboxList';
import StudyInboxManager from './StudyInboxManager';

class StudyInbox extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchList();
  }

  componentDidUpdate() {

  }

  render() {
    return <div className="l-grid l-grid--doublet">
      <div className="l-grid__item">
        <h4>StudyInbox</h4>
        <StudyInboxList {...this.props} />
      </div>
      <div className="l-grid__item">
        <h4>StudyInboxManager</h4>
        <StudyInboxManager />
      </div>
    </div>
  }
}

const mapStateToProps = (state, ownProps) => {
  return state.get('studyInbox').toJS();
};

const mapDispatchToProps = {
  fetchList: fetchList
};

const StudyInboxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StudyInbox);

export { StudyInbox, StudyInboxContainer };