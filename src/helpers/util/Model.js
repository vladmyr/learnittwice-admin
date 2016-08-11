'use strict';

import {Promise} from 'bluebird';
import * as _ from 'underscore';

class UtilModel {
  static promisify (Model) {
    let proto = Model.prototype;
    const extend = {
      fetch(options = {}) {
        const self = this;
        return new Promise((fulfill, reject) => {
          options.success = fulfill;
          options.reject = reject;
          return proto.fetch.call(self, options);
        })
      },

      save(attrs = {}, options = {}) {
        const self = this;
        return new Promise((fulfill, reject) => {
          options.success = fulfill;
          options.error = reject;
          return proto.save.call(self, attrs, options);
        });
      },

      destroy(options = {}) {
        const self = this;
        return new Promise((fulfill, reject) => {
          options.success = fulfill;
          options.error = reject;
          return proto.destroy.call(self, options)
        })
      }
    }
  }
}

export default UtilModel