'use strict';

import {Promise} from 'bluebird';
import Util from 'src/helpers/util/index';
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
          options.success = Util.Backbone.mapArgsHandler(fulfill);
          options.error = Util.Backbone.mapArgsHandler(reject);
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
    return UtilCollection.setUrlEndpoint(descriptor, name);
  };

  /**
   * Set resource url endpoint
   * @param   {Object}  descriptor
   * @param   {String}  name
   * @returns {Object}
   */
  static setUrlEndpoint(descriptor, name) {
    return _.extend(descriptor, {
      url() {
        const pathnameTemplate = config.collections[name].pathname;
        const matches = pathnameTemplate.match(/\:(\w|\d)+?(\/|$)/g) || [];
        let pathname = pathnameTemplate;

        matches.forEach((match) => {
          const metaPropName = match.replace(/(:|\/)/g, '');
          pathname.replace(match, this.getMeta(metaPropName))
        });

        const urlEndpoint = url.format({
          protocol: config.api.protocol,
          hostname: config.api.host,
          port: config.api.port,
          pathname: pathname
        });

        return urlEndpoint;
      }
    });
  }
}

export default UtilCollection;