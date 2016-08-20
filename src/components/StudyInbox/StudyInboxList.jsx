'use strict';

import React from 'react';
import { connect } from 'react-redux';
import StudyInboxListItem from './StudyInboxListItem'

class StudyInboxList extends React.Component {
  render() {
    return <div className="c-study-inbox">
      <h4 className="c-study-inbox__header">Study inboxes</h4>
      <ul className="c-study-inbox__list">
        {this.props.list.map((item, index) => {
          return <StudyInboxListItem
            key={index}
            id={this.props.listIds[index]}
            name={item.name}
            actSelectInbox={this.props.actSelectInbox}
          />
        })}
      </ul>
    </div>
  }
}

export default StudyInboxList;