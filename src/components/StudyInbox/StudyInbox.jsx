'use strict';

import React from 'react';
import { connect } from 'react-redux';

import { MANAGER_OPEN,
  reqOne,
  fetchList,
  fetchOpenManager
} from 'src/redux/actions/studyInboxActions';
import { TYPE as MODAL_TYPE, open } from 'src/redux/actions/modalActions';

import Grid from 'src/components/General/Grid/Grid';
import GridItem from 'src/components/General/Grid/GridItem';
import StudyInboxList from './StudyInboxList/StudyInboxList';
import { StudyInboxManagerContainer } from './StudyInboxManager/StudyInboxManager';

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
    if (id && id == this.props.Manager.inboxId) {
      // active inbox was selected - do nothing
      return;
    } else if (this.props.Manager.hasChanges) {
      // another inbox was selected before persisting changes - display dialog modal
      this.props.modalOpen({
        name: 'openManager',
        args: [id]
      }, MODAL_TYPE.CONFIRM, {
        title: 'You have not-persisted changes',
        message: 'Are you sure you want to continue? All not-persisted changes will be lost.'
      });
    } else {
      // switch to specified inbox
      this.props.fetchOpenManager(id);
    }
  }

  actCreateInbox() {
    return this.actSelectInbox();
  }

  render() {
    const actCreateInboxBound = this.actCreateInbox.bind(this);
    const actSelectInboxBound = this.actSelectInbox.bind(this);

    return <div className="l-grid l-grid--doublet">
      <div className="l-grid__item">
        <StudyInboxList
          actCreateInbox={actCreateInboxBound}
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
  fetchOpenManager,
  modalOpen: open
};

const StudyInboxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StudyInbox);

export { StudyInbox, StudyInboxContainer };