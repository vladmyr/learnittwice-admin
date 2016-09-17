'use strict';

import React from 'react';
import classNames from 'classnames';

const defaultProps = {
  className: 'grid',
  classNameModifier: ''
};

class Grid extends React.Component {
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

Grid.defaultProps = defaultProps;

export default Grid;