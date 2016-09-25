'use strict';

import React from 'react';

import InputText from 'src/components/General/InputText';
import InputSelect from 'src/components/General/InputSelect';

const QUESTION_TYPE = {
  KEYBOARD_TYPE: 'keyboardType',
  SELECT_SINGLE: 'selectSingle',
  SELECT_MULTIPLE: 'selectMultiple',
  SELECT_SEQUENCE: 'selectSequence'
};

const defaultProps = {
  slug: '',
  shouldStateUpdateListener: Function.prototype(),
  questionTypeOptions: {
    optionsPlaceholder: {},
    options: [{
      value: QUESTION_TYPE.KEYBOARD_TYPE,
      label: 'Keyboard type in'
    }, {
      value: QUESTION_TYPE.SELECT_SINGLE,
      label: 'Select single',
      isDisabled: true
    }, {
      value: QUESTION_TYPE.SELECT_MULTIPLE,
      label: 'Select multiple',
      isDisabled: true
    }, {
      value: QUESTION_TYPE.SELECT_SEQUENCE,
      label: 'Select sequence',
      isDisabled: true
    }]
  },
  questionTypeSelected: QUESTION_TYPE.KEYBOARD_TYPE
};

class StudyItemManagerMetadata extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="study-item__metadata">
      <h5>Metadata</h5>
      <InputText
        title="Slug"
        placeholder="uniq-slug-name"
        value={this.props.slug}
        shouldStateUpdateListener={this.props.shouldStateUpdateListener}
      />
      <InputSelect
        title="Question type"
        selectedValue={this.props.questionTypeSelected}
        {...this.props.questionTypeOptions}
      />
    </div>;
  }
}

StudyItemManagerMetadata.defaultProps = defaultProps;

export default StudyItemManagerMetadata;