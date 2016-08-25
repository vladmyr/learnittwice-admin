'use strict';

import React from 'react';
import * as _ from 'underscore';

const defaultProps = {
  className: 'button',
  label: 'label',
  isDisabled: false,
  onClick: Function.prototype
};

class BtnGeneric extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <button
      className={this.props.className}
      disabled={this.props.isDisabled}
      onClick={this.props.onClick}
    >
      {this.props.children ? this.props.children : this.props.label }
    </button>
  }
}

BtnGeneric.defaultProps = defaultProps;

export default BtnGeneric;