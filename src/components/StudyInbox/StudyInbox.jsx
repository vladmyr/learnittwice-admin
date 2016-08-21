'use strict';

import React from 'react';
import { connect } from 'react-redux';

import { reqOne, fetchList, openManager } from 'src/redux/actions/studyInboxActions';
import { open } from 'src/redux/actions/modalActions';

import StudyInboxList from './StudyInboxList';
import StudyInboxManager from './StudyInboxManager';

class StudyInbox extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchList();
    this.props.open();
  }

  componentDidUpdate() {

  }

  actSelectInbox(id = null) {
    this.props.openManager(id);
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
            <StudyInboxManager
              ref="Manager"
              {...this.props.Manager}
            />
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
  reqOne,
  fetchList,
  openManager,
  open
};

const StudyInboxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StudyInbox);

export { StudyInbox, StudyInboxContainer };