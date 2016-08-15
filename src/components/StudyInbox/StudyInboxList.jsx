'use strict';

import React from 'react';
import {connect} from 'react-redux';

class StudyInboxList extends React.Component {
  render() {
    return <div className="study-inbox__list">

    </div>
  }
}

const mapStateToProps = (state) => ({
  state
});

const mapDispatchToProps = (dispatch) => ({
  list
});

const StudyInboxListContainer = connect(
  mapStateToProps
  //mapDispatchToProps
)(StudyInboxList);

export default StudyInboxListContainer;