'use strict';

import React from 'react';

class StudyInboxListItem extends React.Component {
  render() {
    return <li
      className="study-inbox__list-item"
      onClick={() => this.props.actSelectInbox(this.props.id)}
    >
      <a>{this.props.name}</a>
    </li>
  }
}

export default StudyInboxListItem;