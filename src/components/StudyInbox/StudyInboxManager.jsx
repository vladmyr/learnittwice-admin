'use strict';

import React from 'react';
import { connect } from 'react-redux';

import InputText from 'src/components/General/InputText';
import BtnGeneric from 'src/components/General/BtnGeneric';

class StudyInboxManager extends React.Component {
  render() {
    return <div className="study-inbox__manager">
      <InputText />
      <BtnGeneric />
    </div>
  }
}

export default StudyInboxManager;