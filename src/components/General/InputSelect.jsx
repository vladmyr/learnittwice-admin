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
  selectedValue: false,
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

  }

  render() {
    const onChangeBound = this.onChange.bind(this);

    return <select className="select"
       value={this.props.selectedValue}
       onChange={onChangeBound}
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
      {this.props.options.map((option, index) => {
        return <option
          key={index}
          value={option.value}
          disabled={option.isDisabled ? option.isDisabled : false}
        >
          {option.label}
        </option>
      })}
    </select>;
  }
}

InputSelect.defaultProps = defaultProps;

export default InputSelect;