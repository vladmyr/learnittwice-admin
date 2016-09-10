'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import * as _ from 'underscore';

import { initialState } from 'src/redux/reducers/studyInboxReducer';
import { save,
  destroy,
  openManager,
  resetManagerData,
  setManagerPropData } from 'src/redux/actions/studyInboxActions';
import { TYPE as MODAL_TYPE,
  WINDOW_CLASS_MODIFIER as MODAL_WINDOW_CLASS_MODIFIER,
  open as openModal
} from 'src/redux/actions/modalActions';

import InputText from 'src/components/General/InputText';
import BtnGeneric from 'src/components/General/BtnGeneric';
import { StudyItemListContainer } from 'src/components/StudyItem/StudyItemList';

const defaultProps = {
  isNetProcessing: false,
  isVisible: false,
  hasChanges: false,
  inboxId: null,
  inboxData: {},
  prevInboxData: {}
};


class StudyInboxManager extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldStateUpdateListener(prop, value) {
    this.props.setManagerPropData(prop, value);
  }

  shouldLocalStateUpdateListener(prop, value) {
    const localState = _.clone(this.props.inboxData);

    localState[prop] = value;

    return this.setState({
      hasChanges: !_.isEqual(localState, this.props.prevInboxData)
    });
  }

  reset() {
    if (!this.props.hasChanges) {
      return;
    }

    this.props.openModal({
      name: 'resetManagerData',
      args: [this.props.inboxId]
    }, MODAL_TYPE.CONFIRM, {
      title: 'You have not-persisted changes',
      message: 'Are you sure you want to continue? All not-persisted changes will be lost.'
    });
  }

  destroy() {
    this.props.openModal({
      name: 'destroyStudyInbox',
      args: [this.props.inboxId]
    }, MODAL_TYPE.CONFIRM, {
      classNameModifier: MODAL_WINDOW_CLASS_MODIFIER.WARNING,
      title: `Delete inbox "${this.props.prevInboxData.name}"?`,
      message: `Are you sure you want to delete inbox "${this.props.prevInboxData.name}"? This will also delete all nested data.`
    })
  }

  render() {
    const shouldStateUpdateListenerBound = this.shouldStateUpdateListener.bind(this);
    const resetBound = this.reset.bind(this);
    const saveBound = this.props.save.bind(this);
    const destroyBound = this.destroy.bind(this);

    return <div className="study-inbox__manager">
      <div className="l-grid-flex">
        <h4 className="l-grid-flex__item l-grid-flex__item--shrink">
          {this.props.inboxId
            ? this.props.prevInboxData.name
            : 'New inbox'
          }
        </h4>
        <div className="l-grid-flex__item l-grid-flex__item--pull-right">
          {!this.props.inboxId
            ? null
            : <BtnGeneric
                className="cycle-button"
                label="D"
                onClick={destroyBound}
              />
          }
          <BtnGeneric
            className="cycle-button"
            label="R"
            isDisabled={!this.props.hasChanges}
            onClick={resetBound}
          />
          <BtnGeneric
            className="cycle-button"
            label="S"
            isDisabled={!this.props.hasChanges}
            onClick={saveBound}
          />
        </div>
      </div>
      <InputText
        ref="name"
        title="Name"
        placeholder="Example Inbox"
        value={this.props.inboxData.name || ''}
        stateChangeListener={shouldStateUpdateListenerBound}
      />
      <div className="study-item__list">
        {!this.props.inboxData.itemsLength
          ? <span class="study-item__empty">
            There are no items added yet
          </span>
          : <StudyItemListContainer />
        }
      </div>
    </div>
  }
}

StudyInboxManager.defaultProps = _.defaults(
  initialState.get('Manager').toJS(),
  defaultProps
);

const mapStateToProps = (state, ownProps) => {
  const stateManager = state.getIn(['StudyInbox', 'Manager']).toJS();

  if (stateManager.inboxId) {
    const index = state.getIn(['StudyInbox','listIds']).indexOf(stateManager.inboxId);

    if (index != -1) {
      stateManager.prevInboxData = state.getIn(['StudyInbox', 'list', index]).toJS();
    }
  }

  return stateManager;
};

const mapDispatchToProps = {
  save,
  openModal,
  openManager,
  resetManagerData,
  setManagerPropData
};

const StudyInboxManagerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StudyInboxManager);

export { StudyInboxManager, StudyInboxManagerContainer };