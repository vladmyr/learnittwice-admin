'use strict';

import {Promise} from 'bluebird';
import * as _ from 'underscore';
import * as url from "url";
import * as config from "src/config.json";

class UtilModel {
  /**
   * Promisify fetch, save, destroy
   * @param   {Backbone.Model}  Model
   * @returns {Backbone.Model}
   */
  static promisify (Model) {
    const proto = Model.prototype;
    const extend = {
      fetch(options = {}) {
        const self = this;
        return new Promise((fulfill, reject) => {
          options.success = fulfill;
          options.error = reject;
          return proto.fetch.call(self, options);
        })
      },

      save(attrs = {}, options = {}) {
        return new Promise((fulfill, reject) => {
          options.success = fulfill;
          options.error = reject;
          return proto.save.call(proto, attrs, options);
        });
      },

      destroy(options = {}) {
        const self = this;
        return new Promise((fulfill, reject) => {
          options.success = fulfill;
          options.error = reject;
          return proto.destroy.call(proto, options)
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
      pathname: _.has(config.models, name, "pathname")
        ? config.models[name].pathname
        : ""
    });

    return _.extend(descriptor, {urlRoot: urlRoot});
  }
}

export default UtilModel