'use strict';

import {Model} from 'backbone';
import Util from 'src/helpers/util/index';

const PromisifiedModel = Util.Model.promisify(Model);
const BaseModel = PromisifiedModel.extend({
  idAttribute: 'id'
});

export default BaseModel;