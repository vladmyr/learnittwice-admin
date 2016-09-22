'use strict';

import React from 'react';
import * as _ from 'underscore';

// ToDo: disable placeholder on first change

const defaultProps = {
  optionsPlaceholder: {
    value: false,
    label: 'Pick one'
  },
  options: [],
  initialValue: false,
  shouldStateUpdateListener: Function.prototype()
};

class InputSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isPlaceholderDisabled: !_.isEmpty(this.props.optionsPlaceholder)
        && this.props.optionsPlaceholder.value == this.props.initialValue
    }
  }

  onChange() {
    this.state.isPlaceholderDisabled = true;


  }

  render() {
    return <select className="input-control select"
       value={this.props.initialValue}
    >
      {_.isEmpty(this.props.optionsPlaceholder)
        ? null
        : <option
            value={this.props.optionsPlaceholder.value}
            disabled={this.state.isPlaceholderDisabled}
          >
            {this.props.optionsPlaceholder.label}
          </option>
      }
      {this.props.options.map((option) => {
        return <option value={option.value}>
          {option.label}
        </option>
      })}
    </select>;
  }
}

InputSelect.defaultProps = defaultProps;

export default InputSelect;