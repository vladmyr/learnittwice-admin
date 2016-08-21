'use strict';

import React from 'react';

const defaultProps = {
  className: 'button',
  label: 'label',
  onClick() {}
};

const defaultState = {
  isDisabled: false
};

class BtnGeneric extends React.Component {
  constructor(props) {
    super(props);

    this.state = defaultState;
  }

  render() {
    return <a
      className={this.props.className}
      disabled={this.state.isDisabled}
      onClick={this.props.onClick}
    >
      {this.props.children ? this.props.children : this.props.label }
    </a>
  }
}

BtnGeneric.defaultProps = defaultProps;

export default BtnGeneric;