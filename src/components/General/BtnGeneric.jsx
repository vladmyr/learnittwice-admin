'use strict';

import React from 'react';

const defaultProps = {
  label: 'label',
  href: '',
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
    return <a className="btn"
              disabled={this.state.isDisabled}
              onClick={this.props.onClick}
    >
      {this.props.children ? this.props.children : this.props.label }
    </a>
  }
}

BtnGeneric.defaultProps = defaultProps;

export default BtnGeneric;