import React from 'react';
import './bundle.scss';

import * as studyInboxActions from 'src/redux/actions/studyInboxActions';

class App extends React.Component {
  render() {
    return <div className="universe">
      <div className="header"></div>
      {this.props.children}
      <div className="footer"></div>
    </div>
  }
}

export default App;