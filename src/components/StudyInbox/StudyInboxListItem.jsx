'use strict';

import React from 'react';

class StudyInboxListItem extends React.Component {
  render() {
    return <li className="study-inbox__list-item">
      {this.props.name}
    </li>
  }
}

export default StudyInboxListItem;