'use strict';

import React from 'react';
import { connect } from 'react-redux';

import BtnGeneric from 'src/components/General/BtnGeneric';
import StudyItemManagerMetadata from './StudyItemManagerMetadata';
import StudyItemManagerType from './StudyItemManagerType';

import {
  resetManagerData,
  setManagerPropData,
  save,
  destroy
} from 'src/redux/actions/studyItemActions';

class StudyItemManager extends React.Component {
  constructor(props) {
    super(props);
  }

  reset() {
    this.props.resetManagerData();
  }

  save() {
    this.props.save();
  }

  destroy() {
    this.props.destroy();
  }

  shouldStateUpdateListener(prop, value) {
    this.props.setManagerPropData(prop, value);
  }

  render() {
    const destroyBound = this.destroy.bind(this);
    const resetBound = this.reset.bind(this);
    const saveBound = this.save.bind(this);
    const shouldStateUpdateListenerBound = this.shouldStateUpdateListener.bind(this);

    return <div className="study-item__manager">
      <div className="l-grid-flex">
        <h4 className="l-grid-flex__item l-grid-flex__item--shrink">
          {this.props.itemId
            ? this.props.itemPersistedState.slug
            : 'New item'
          }
        </h4>
        <div className="l-grid-flex__item l-grid-flex__item--pull-right">
          {!this.props.itemId
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
      <div className="">
        <StudyItemManagerMetadata
          slug={this.props.itemData.slug}
          questionTypeSelected={this.props.itemData.questionType}
          shouldStateUpdateListener={shouldStateUpdateListenerBound}
        />
        <StudyItemManagerType
          typeName="question.type"
          typeSelected={this.props.itemData.question.type}
          contentName="question.content"
          contentValue={this.props.itemData.question.content}
          shouldStateUpdateListener={shouldStateUpdateListenerBound}
        />
        <StudyItemManagerType
          title="Answer"
          classNameModifier="study-item__type--answer"
          typeName="answer.type"
          typeSelected={this.props.itemData.answer.type}
          contentName="answer.content"
          contentValue={this.props.itemData.answer.content}
          shouldStateUpdateListener={shouldStateUpdateListenerBound}
        />
      </div>
    </div>
  }
}

const mapStateToProps = (state, ownProps) => {
  return state.getIn(['StudyItem', 'Manager']).toJS();
};
const mapDispatchToProps = ({
  resetManagerData,
  setManagerPropData,
  save
});

const StudyItemManagerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StudyItemManager);

export { StudyItemManager, StudyItemManagerContainer };
