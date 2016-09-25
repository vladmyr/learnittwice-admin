'use strict';

import React from 'react';
import { connect } from 'react-redux';

import InputSelect from 'src/components/General/InputSelect';
import InputText from 'src/components/General/InputText';
import InputTextarea from 'src/components/General/InputTextarea';

import {
  QUESTION_COMPONENT_TYPE as TYPE
} from 'src/redux/reducers/studyItemReducer'

const defaultProps = {
  classNameModifier: 'study-item__type--question',
  title: 'Question',
  contentName: 'content',
  contentValue: '',
  typeName: 'name',
  typeOptions: {
    optionsPlaceholder: {},
    options: [{
      value: TYPE.TEXT,
      label: 'Text'
    }, {
      value: TYPE.LEMMA,
      label: 'Wordnet - Lemma',
      isDisabled: true
    }, {
      value: TYPE.SYNSET,
      label: 'Wordnet - Synset',
      isDisabled: true
    }, {
      value: TYPE.IMAGE,
      label: 'Media - Image',
      isDisabled: true
    }, {
      value: TYPE.AUDIO,
      label: 'Media - Audio',
      isDisabled: true
    }]
  },
  typeSelected: TYPE.TEXT
};

class StudyItemManagerType extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="study-item__type">
      <h5>{this.props.title}</h5>
      <InputSelect
        title=""
        name={this.props.typeName}
        selectedValue={this.props.typeSelected}
        {...this.props.typeOptions}
      />
      { this.props.typeSelected == TYPE.TEXT
        ? <InputTextarea
            name={this.props.contentName}
            title=""
            value={this.props.contentValue}
            shouldStateUpdateListener={this.props.shouldStateUpdateListener}
          />
        : null
      }
    </div>
  }
}

StudyItemManagerType.defaultProps = defaultProps;

export default StudyItemManagerType;