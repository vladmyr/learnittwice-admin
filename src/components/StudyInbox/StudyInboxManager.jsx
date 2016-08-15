'use strict';

import React from 'react';
import { connect } from 'react-redux';

import InputText from 'src/components/General/InputText';

class StudyInboxManager extends React.Component {
  render() {
    return <div className="study-inbox__manager">
      <InputText />
    </div>
  }
}

export default StudyInboxManager;