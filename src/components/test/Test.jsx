import React from "react";
import {connect} from "react-redux";

import "./Test.scss";

const Test = React.createClass({
  render() {
    return <div>
      <h2>This is a test component</h2>
    </div>
  }
});

const mapStateToProps = (state) => {
  return state;
};

const TestContainer = connect(mapStateToProps)(Test);

export { Test, TestContainer };