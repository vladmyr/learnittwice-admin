'use strict';

import React from 'react';

import InputText from 'src/components/General/InputText';

const defaultProps = {
  slug: '',
  shouldStateUpdateListener: Function.prototype()
}

class StudyItemManagerMetadata extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="study-item__metadata">
      <h5>Metadata</h5>
      <InputText
        title="Slug"
        placeholder="uniq-slug-name"
        value={this.props.slug}
        shouldStateUpdateListener={this.props.shouldStateUpdateListener}
      />
    </div>;
  }
}

StudyItemManagerMetadata.defaultProps = defaultProps;

export default StudyItemManagerMetadata;