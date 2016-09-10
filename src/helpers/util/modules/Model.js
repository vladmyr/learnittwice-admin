'use strict';

import { Promise } from 'bluebird';
import Util from 'src/helpers/util/index';
import * as _ from 'underscore';
import * as url from 'url';
import * as config from 'src/config.json';

class UtilModel {
  /**
   * Promisify fetch, save, destroy methods
   * @param   {Backbone.Model}  Model
   * @returns {Backbone.Model}
   */
  static promisify (Model) {
    const proto = Model.prototype;
    const extend = {
      getIsNew() {
        return !this.hasOwnProperty(this.idAttribute);
      },

      fetch(options = {}) {
        const self = this;

        return new Promise((fulfill, reject) => {
          options.success = Util.Backbone.mapArgsHandler(fulfill);
          options.error = Util.Backbone.mapArgsHandler(reject);
          return proto.fetch.call(self, options);
        })
      },

      save(attrs = {}, options = {}) {
        const self = this;

        return new Promise((fulfill, reject) => {
          // use PUT to create and POST to update
          options.type = self.getIsNew() ? 'PUT' : 'POST';
          options.success = Util.Backbone.mapArgsHandler(fulfill);
          options.error = Util.Backbone.mapArgsHandler(reject);
          return proto.save.call(self, attrs, options);
        });
      },

      destroy(options = {}) {
        const self = this;

        return new Promise((fulfill, reject) => {
          options.contentType = false;
          options.processData = false;
          options.success = Util.Backbone.mapArgsHandler(fulfill);
          options.error = Util.Backbone.mapArgsHandler(reject);
          return proto.destroy.call(self, options)
        })
      }
    };

    return Model.extend(extend);
  }

  /**
   * Post declaration of a model descriptor object with common definitions
   * @param   {Object}  descriptor
   * @param   {String}  name
   * @returns {Object}
   */
  static postDeclaration(descriptor, name) {
    return UtilModel.setUrlRoot(descriptor, name);
  };


  /**
   * Set resource url endpoint
   * @param   {Object}  descriptor
   * @param   {String}  name
   * @returns {Object}
   */
  static setUrlRoot(descriptor, name) {
    const urlRoot = url.format({
      protocol: config.api.protocol,
      hostname: config.api.host,
      port: config.api.port,
      pathname: config.models[name].pathname
    });

    return _.extend(descriptor, {
      urlRoot: urlRoot
    });
  }
}

export default UtilModel