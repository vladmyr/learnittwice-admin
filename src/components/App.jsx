import React from "react";

export const App = React.createClass({
  render() {
    return <div>
      {this.props.children}
    </div>
  }
});