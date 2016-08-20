'use strict';

import React from 'react';
import * as _ from 'underscore';

const defaultProps = {
  title: 'title',
  placeholder: 'placeholder',
  name: 'name',
  value: 'value',
  stateListener: Function.prototype()
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

  onChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return <div className="c-input__text">
      <h5 className="c-input__header">{this.props.title}</h5>
      <input type="text"
             className="c-input__field"
             name={this.props.name}
             placeholder={this.props.placeholder}
             value={this.state.value}
             onChange={this.onChange.bind(this)}
      />
    </div>
  }
}

InputText.defaultProps = defaultProps;

export default InputText;