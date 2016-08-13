'use strict';

import {Promise} from 'bluebird';
import * as _ from 'underscore';
import * as url from 'url';
import * as config from 'src/config.json';

class UtilCollection {
  /**
   * Promisify fetch method
   * @param   {Backbone.Collection} Collection
   * @returns {Backbone.Collection}
   */
  static promisify(Collection) {
    const proto = Collection.prototype;
    const extend = {
      fetch(options = {}) {
        const self = this;
        return new Promise((fulfill, reject) => {
          options.success = fulfill;
          options.error = reject;
          return proto.fetch.call(self, options);
        })
      }
    };

    return Collection.extend(extend);
  }

  /**
   * Post declaration of a collection descriptor object with common definitions
   * @param   {Object}  descriptor
   * @param   {String}  name
   * @returns {Object}
   */
  static postDeclaration(descriptor, name) {
    return UtilCollection.setUrlRoot(descriptor, name);
  };

  /**
   * Set resource endpoint
   * @param   {Object}  descriptor
   * @param   {String}  name
   * @returns {Object}
   */
  static setUrlRoot(descriptor, name) {
    const urlRoot = url.format({
      protocol: config.api.protocol,
      hostname: config.api.host,
      port: config.api.port,
      pathname: _.has(config.collections, name, 'pathname')
        ? config.collections[name].pathname
        : ''
    });

    return _.extend(descriptor, {url: urlRoot});
  }
}

export default UtilCollection;