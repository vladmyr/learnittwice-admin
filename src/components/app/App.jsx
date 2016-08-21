import React from 'react';
import './bundle.scss';

import * as studyInboxActions from 'src/redux/actions/studyInboxActions';

import { ModalContainer } from 'src/components/General/Modal/Modal';

class App extends React.Component {
  render() {
    return <div className="universe">
      <div className="header"></div>
      <div className="content">
        {this.props.children}
      </div>
      <div className="footer"></div>
      <ModalContainer />
    </div>
  }
}

export default App;