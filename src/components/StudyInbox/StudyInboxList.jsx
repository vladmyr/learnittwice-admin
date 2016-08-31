'use strict';

import React from 'react';
import { connect } from 'react-redux';

import StudyInboxListItem from './StudyInboxListItem'
import BtnGeneric from 'src/components/General/BtnGeneric'

class StudyInboxList extends React.Component {
  render() {
    return <div className="c-study-inbox">
      <div className="l-grid-flex">
        <h4
          className="c-study-inbox__title l-grid-flex__item l-grid-flex__item--shrink"
        >
          Study inboxes
        </h4>
        <BtnGeneric
          className="cycle-button l-grid-flex__item l-grid-flex__item--pull-right"
          label="A"
          onClick={this.props.actCreateInbox}
        />
      </div>
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