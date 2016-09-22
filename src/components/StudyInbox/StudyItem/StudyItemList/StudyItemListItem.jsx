'use strict';

import React from 'react';

class StudyItemListItem extends React.Component {
  render() {
    return <li
      className="study-item__list-item"
      onClick={() => this.props.actSelectItem(this.props.id)}
    >
      <a>{this.props.slug}</a>
    </li>
  }
}

export default StudyItemListItem;