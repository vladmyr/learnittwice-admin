'use strict';

import React from 'react';
import * as _ from 'underscore';

const defaultProps = {
  title: 'title',
  placeholder: 'placeholder',
  name: 'name',
  value: 'value',
  shouldStateUpdateListener: Function.prototype()
};

class InputText extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      value: newProps.value
    });
  }

  internalStateChangeListener() {
    if (this.props.value != this.state.value) {
      this.props.shouldStateUpdateListener(this.props.name, this.state.value);
    }
  }

  onChange(event) {
    this.setState({
      value: event.target.value
    }, this.internalStateChangeListener);
  }

  render() {
    const onChangeBound = this.onChange.bind(this);

    return <div className="c-input__text">
      {this.props.title
        ? <label className="c-input__header">{this.props.title}</label>
        : null
      }
      <input type="text"
        className="c-input__field"
        name={this.props.name}
        placeholder={this.props.placeholder}
        value={this.state.value}
        onChange={onChangeBound}
      />
    </div>
  }
}

InputText.defaultProps = defaultProps;

export default InputText;