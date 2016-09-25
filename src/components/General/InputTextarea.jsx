'use strict';

import React from 'react';
import InputText from './InputText';

class InputTextarea extends InputText {
  constructor(props) {
    super(props);
  }

  render() {
    const onChangeBound = this.onChange.bind(this);

    return <div className="c-input__textarea">
      {this.props.title
        ? <label className="c-input__header">{this.props.title}</label>
        : null
      }
      <textarea className="c-input__field"
        name={this.props.name}
        placeholder={this.props.placeholder}
        value={this.state.value}
        rows={this.props.rows}
        onChange={onChangeBound}
      >
      </textarea>
    </div>
  }
}

InputTextarea.defaultProps.rows = 4;

export default InputTextarea;