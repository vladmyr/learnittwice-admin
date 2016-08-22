'use strict';

import React from 'react';
import { connect } from 'react-redux';

import { MANAGER_SET_DATA,
  reqOne,
  fetchList,
  openManager
} from 'src/redux/actions/studyInboxActions';
import { TYPE as MODAL_TYPE, open } from 'src/redux/actions/modalActions';

import StudyInboxList from './StudyInboxList';
import { StudyInboxManagerContainer } from './StudyInboxManager';

class StudyInbox extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchList();
    //this.props.open();
  }

  componentDidUpdate() {

  }

  actSelectInbox(id = null) {
    if (id == this.props.Manager.inboxId) {
      return;
    } else if (this.props.Manager.hasChanges) {
      const inboxData = {};

      this.props.modalOpen({
        type: MANAGER_SET_DATA,
        inboxData
      }, MODAL_TYPE.CONFIRM);
    } else {
      this.props.openManager(id);
    }
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
            <StudyInboxManagerContainer ref="Manager" />
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
  modalOpen: open
};

const StudyInboxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StudyInbox);

export { StudyInbox, StudyInboxContainer };