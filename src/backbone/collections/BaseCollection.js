'use strict';

import {Collection} from 'backbone';
import Util from 'src/helpers/util/index';

const PromisifiedCollection = Util.Collection.promisify(Collection);
const BaseCollection = PromisifiedCollection.extend({
  constructor() {
    PromisifiedCollection.prototype.constructor.apply(this, arguments);
    this._meta = {};
  },

  setMeta(prop, value) {
    this._meta[prop] = value;
  },

  getMeta(prop) {
    return this._meta[prop];
  },

  parse(res) {
    return res.data;
  }
});

export default BaseCollection;