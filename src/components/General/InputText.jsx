'use strict';

import React from 'react';
import * as _ from 'underscore';

const defaultProps = {
  title: 'title',
  placeholder: 'placeholder',
  name: 'name',
  value: 'value'
};

class InputText extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value
    }
  }

  onChangeListener(event) {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return <div className="input__text">
      <h5>{this.props.title}</h5>
      <input type="text"
             name={this.props.name}
             placeholder={this.props.placeholder}
             value={this.state.value}
             onChange={this.onChangeListener.bind(this)}
      />
    </div>
  }
}

InputText.defaultProps = defaultProps;

export default InputText;