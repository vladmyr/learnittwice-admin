'use strict';

import React from 'react';
import { connect } from 'react-redux';
import StudyInboxListItem from './StudyInboxListItem'

class StudyInboxList extends React.Component {
  render() {
    return <ul className="study-inbox__list">
      {this.props.list.map((item, index) => {
        return <StudyInboxListItem key={index} name={item.name} />
      })}
    </ul>
  }
}

export default StudyInboxList;