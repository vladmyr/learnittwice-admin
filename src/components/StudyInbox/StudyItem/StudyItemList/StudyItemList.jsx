'use strict';

import React from 'react';
import { connect } from 'react-redux';

import StudyItemListItem from './StudyItemListItem';

class StudyItemList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillReceiveProps(newProps) {

  }

  render() {
    return <ul className="c-study-item__list">
      {this.props.list.map((item, index) => {
        return <StudyItemListItem
          key={index}
          id={this.props.listIds[index]}
          slug={item.slug}
          actSelectItem={this.props.actSelectItem}
        />
      })}
    </ul>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return state.get('StudyItem').toJS();
};

const mapDispatchToProps = {};

const StudyItemListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StudyItemList);

export { StudyItemList, StudyItemListContainer };