'use strict';

import React from 'react';
import { connect } from 'react-redux';

import {
  reqOne,
  fetchList,
  fetchOpenManager
} from 'src/redux/actions/studyInboxActions';
import {
  TYPE as MODAL_TYPE,
  open as modalOpen
} from 'src/redux/actions/modalActions';
import {
  reqOne as studyItemReqOne,
  fetchOpenManager as studyItemFetchOpenManager
} from 'src/redux/actions/studyItemActions';

import ScrollManager from 'src/services/ScrollManager';
import Grid from 'src/components/General/Grid/Grid';
import GridItem from 'src/components/General/Grid/GridItem';
import StudyInboxList from './StudyInboxList/StudyInboxList';
import { StudyInboxManagerContainer } from './StudyInboxManager/StudyInboxManager';
import { StudyItemManagerContainer } from './StudyItem/StudyItemManager/StudyItemManager';



const REF_STUDY_INBOX_CONTAINER = 'studyInboxContainer';

class StudyInbox extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchList();
    this.scrollManager = new ScrollManager(this.refs[REF_STUDY_INBOX_CONTAINER]);
  }

  componentDidUpdate() {
    this.scrollManager.scrollRight();
  }

  actSelectInbox(id = null) {
    if (id && id == this.props.StudyInbox.Manager.inboxId) {
      // active inbox was selected - do nothing
      return;
    } else if (this.props.StudyInbox.Manager.hasChanges) {
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

  // ToDo: remove code duplicate
  actSelectItem(id = null) {
    if (id && id == this.props.StudyItem.Manager.itemId) {
      // active item was selected - do nothing
      return;
    } else if (this.props.StudyItem.Manager.hasChanges) {
      // another item was selected before persisting changes - display dialog modal
      this.props.modalOpen({
        name: 'openManager',
        args: [id]
      }, MODAL_TYPE.CONFIRM, {
        title: 'You have not-persisted changes',
        message: 'Are you sure you want to continue? All not-persisted changes will be lost.'
      });
    } else {
      // switch to specified item
      this.props.studyItemFetchOpenManager(id);
    }
  }

  actCreateItem() {
    return this.actSelectItem();
  }

  render() {
    const actCreateInboxBound = this.actCreateInbox.bind(this);
    const actSelectInboxBound = this.actSelectInbox.bind(this);
    const actCreateItemBound = this.actCreateItem.bind(this);
    const actSelectItemBound = this.actSelectItem.bind(this);

    return <div ref={REF_STUDY_INBOX_CONTAINER}
      className="full-screen l-grid l-grid--doublet l-grid--infinite"
    >
      <div className="l-grid__item">
        <StudyInboxList
          actCreateInbox={actCreateInboxBound}
          actSelectInbox={actSelectInboxBound}
          {...this.props.StudyInbox}
        />
      </div>
      {this.props.StudyInbox.Manager.isVisible
        ? <div className="l-grid__item">
            <StudyInboxManagerContainer
              ref="Manager"
              actCreateItem={actCreateItemBound}
              actSelectItem={actSelectItemBound}
            />
          </div>
        : null
      }
      {this.props.StudyItem.Manager.isVisible
        ? <div className="l-grid__item">
            <StudyItemManagerContainer
              ref="studyItemManager"
            />
          </div>
        : null
      }
    </div>
  }
}

const mapStateToProps = (state, ownProps) => {
  const mapState = {
    StudyInbox: state.get('StudyInbox').toJS(),
    StudyItem: state.get('StudyItem').toJS()
  };

  return mapState;
};

const mapDispatchToProps = {
  // modal
  modalOpen,

  // StudyInbox
  reqOne,
  fetchList,
  fetchOpenManager,

  // StudyItem
  studyItemReqOne,
  studyItemFetchOpenManager,
};

const StudyInboxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StudyInbox);

export { StudyInbox, StudyInboxContainer };