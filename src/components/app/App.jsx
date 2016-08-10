import React from "react";
import "./App.scss";

const App = React.createClass({
  render() {
    return <div>
      {this.props.children}
    </div>
  }
});

export { App };