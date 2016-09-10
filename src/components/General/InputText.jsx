'use strict';

import React from 'react';
import * as _ from 'underscore';

const defaultProps = {
  title: 'title',
  placeholder: 'placeholder',
  name: 'name',
  value: 'value',
  stateChangeListener: Function.prototype(),
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
    if (this.props.stateChangeListener) {
      this.props.stateChangeListener(this.props.name, this.state.value);
    }
  }

  onChange(event) {
    this.setState({
      value: event.target.value
    }, this.internalStateChangeListener);
  }

  onBlur(event) {
    const value = event.target.value;

    if (this.props.shouldStateUpdateListener && this.props.value != value) {
      this.props.shouldStateUpdateListener(this.props.name, value);
    }
  }

  render() {
    const onChangeBound = this.onChange.bind(this);
    const onBlurBound = this.onBlur.bind(this);

    return <div className="c-input__text">
      <label className="c-input__header">{this.props.title}</label>
      <input type="text"
             className="c-input__field"
             name={this.props.name}
             placeholder={this.props.placeholder}
             value={this.state.value}
             onChange={onChangeBound}
             onBlur={onBlurBound}
      />
    </div>
  }
}

InputText.defaultProps = defaultProps;

export default InputText;