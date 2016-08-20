'use strict';

import React from 'react';

class StudyInboxListItem extends React.Component {
  render() {
    return <li className="study-inbox__list-item">
      <a>{this.props.name}</a>
    </li>
  }
}

export default StudyInboxListItem;