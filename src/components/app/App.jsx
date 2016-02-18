import React from "react";

import "./App.scss";

export const App = React.createClass({
  render() {
    return <div>
      {this.props.children}
    </div>
  }
});