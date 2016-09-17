'use strict';

import React from 'react';
import classNames from 'classnames';

const defaultProps = {
  className: 'grid-item',
  classNameModifier: ''
};

class GridItem extends React.Component {
  render() {
    const className = classNames(
      this.props.className,
      this.props.classNameModifier
    );

    return <div className={className}>
      {this.props.children}
    </div>
  }
}

GridItem.defaultProps = defaultProps;

export default GridItem;