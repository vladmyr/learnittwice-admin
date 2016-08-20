'use strict';

import React from 'react';
import { connect } from 'react-redux';

import { reqOne, fetchList, openManager } from 'src/redux/actions/studyInboxActions';
import StudyInboxList from './StudyInboxList';
import StudyInboxManager from './StudyInboxManager';

class StudyInbox extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchList();
    return;
  }

  componentDidUpdate() {

  }

  actSelectInbox(id = 0) {
    this.props.openManager(id);
    return;
  }

  render() {
    const actSelectInboxBound = this.actSelectInbox.bind(this);

    return <div className="l-grid l-grid--doublet">
      <div className="l-grid__item">
        <StudyInboxList
          actSelectInbox={actSelectInboxBound}
          {...this.props}
        />
      </div>
      {this.props.Manager.isVisible
        ? <div className="l-grid__item">
            <StudyInboxManager {...this.props.Manager} />
          </div>
        : null
      }

    </div>
  }
}

const mapStateToProps = (state, ownProps) => {
  return state.get('StudyInbox').toJS();
};

const mapDispatchToProps = {
  reqOne: reqOne,
  fetchList: fetchList,
  openManager: openManager
};

const StudyInboxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StudyInbox);

export { StudyInbox, StudyInboxContainer };