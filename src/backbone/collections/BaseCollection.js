'use strict';

import {Collection} from 'backbone';
import Util from 'src/helpers/util/index';

const PromisifiedCollection = Util.Collection.promisify(Collection);
const BaseCollection = PromisifiedCollection.extend({
  parse(res) {
    return res.data;
  }
});

export default BaseCollection;