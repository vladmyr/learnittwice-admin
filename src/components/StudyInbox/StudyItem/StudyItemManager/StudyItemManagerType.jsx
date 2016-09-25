'use strict';

import React from 'react';
import { connect } from 'react-redux';

import InputSelect from 'src/components/General/InputSelect';
import InputText from 'src/components/General/InputText';
import InputTextarea from 'src/components/General/InputTextarea';

const TYPE = {
  TEXT: 'text',
  IMAGE: 'mediaImage',
  AUDIO: 'mediaAudio',
  LEMMA: 'refLemma',
  SYNSET: 'refSynset'
};

const defaultProps = {
  title: 'Question',
  classNameModifier: 'study-item__type--question',
  typeOptions: {
    optionsPlaceholder: {},
    options: [{
      value: TYPE.TEXT,
      label: 'text'
    }, {
      value: TYPE.LEMMA,
      label: 'lemma',
      isDisabled: true
    }, {
      value: TYPE.SYNSET,
      label: 'synset',
      isDisabled: true
    }, {
      value: TYPE.IMAGE,
      label: 'image',
      isDisabled: true
    }, {
      value: TYPE.AUDIO,
      label: 'audio',
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
      <InputSelect title=""
        selectedValue={this.props.typeSelected}
        {...this.props.typeOptions}
      />
      { this.props.typeSelected == TYPE.TEXT
        ? <InputTextarea
            ref="questionType"
            name="questionType"
            title=""
            value=""
          />
        : null
      }
    </div>
  }
}

StudyItemManagerType.defaultProps = defaultProps;

export default StudyItemManagerType;