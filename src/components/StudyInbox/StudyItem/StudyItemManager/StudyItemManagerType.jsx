'use strict';

import React from 'react';
import { connect } from 'react-redux';

import InputSelect from 'src/components/General/InputSelect';
import InputText from 'src/components/General/InputText';

const defaultProps = {
  title: 'Question',
  classNameModifier: 'study-item__type--question'
};

class StudyItemManagerType extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const options = [{
      value: 'TEXT',
      label: 'text'
    }, {
      value: 'IMAGE',
      label: 'image'
    }, {
      value: 'AUDIO',
      label: 'audio'
    }];

    return <div className="study-item__type">
      <h5>{this.props.title}</h5>
      <InputSelect title=''
        options={options}
      />
    </div>
  }
}

StudyItemManagerType.defaultProps = defaultProps;

export default StudyItemManagerType;