'use strict';

import React from 'react';
import * as _ from 'underscore';

const defaultProps = {
  optionsPlaceholder: {
    value: -1,
    label: 'select...'
  },
  options: [],
  shouldStateUpdateListener: Function.prototype()
};

class InputSelect