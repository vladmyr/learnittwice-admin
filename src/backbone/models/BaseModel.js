'use strict';

import {Model} from 'backbone';
import Util from 'src/helpers/util/index';

const PromisifiedModel = Util.Model.promisify(Model);
const BaseModel = PromisifiedModel.extend({
  idAttribute: 'id',
  parse(res) {
    if (res.id) {
      // parse as collection item
      return res;
    } else {
      // parse as single instance
      return res.data[0];
    }
  }
});

export default BaseModel;