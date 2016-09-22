'use strict';

import React from 'react';
import { connect } from 'react-redux';

import InputText from 'src/components/General/InputText';
import BtnGeneric from 'src/components/General/BtnGeneric';

class StudyItemManager extends React.Component {
  constructor(props) {
    super(props);
  }

  reset() {

  }

  save() {

  }

  destroy() {

  }

  render() {
    const destroyBound = this.destroy.bind(this);
    const resetBound = this.reset.bind(this);
    const saveBound = this.save.bind(this);

    return <div className="study-item__manager">
      <div className="l-grid-flex">
        <h4 className="l-grid-flex__item l-grid-flex__item--shrink">
          {this.props.itemId
            ? this.props.itemPersistedState.slug
            : 'New item'
          }
        </h4>
        <div className="l-grid-flex__item l-grid-flex__item--pull-right">
          {!this.props.itemId
            ? null
            : <BtnGeneric
                className="cycle-button"
                label="D"
                onClick={destroyBound}
              />
          }
          <BtnGeneric
            className="cycle-button"
            label="R"
            isDisabled={false}
            onClick={resetBound}
          />
          <BtnGeneric
            className="cycle-button"
            label="R"
            isDisabled={false}
            onClick={saveBound}
          />
        </div>
      </div>

    </div>
  }
}

const mapStateToProps = (state, ownProps) => {
  return state.getIn(['StudyItem', 'Manager']).toJS();
};
const mapDispatchToProps = ({});

const StudyItemManagerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StudyItemManager);

export { StudyItemManager, StudyItemManagerContainer };
