import { Promise } from "bluebird";

import * as _ from "underscore";
import * as url from "url";
import * as config from "../config.json";

/**
 * Utility functionality provider
 * @type {Util}
 * @module
 */
const Util = (() => {
  const UtilModel = {
    getIdAttribute (modelName) {
      return _.has(config.models, modelName, "id")
        ? config.models[modelName].id
        : "id"
    },
    getUrlRoot (modelName) {
      return url.format({
        protocol: config.api.protocol,
        hostname: config.api.host,
        port: config.api.port,
        pathname: _.has(config.models, modelName, "pathname")
          ? config.models[modelName].pathname
          : ""
      })
    },
    promisify (Model) {
      let proto = Model.prototype;
      let extend = {
        fetch(options = {}) {
          let self = this;
          return new Promise((fulfill, reject) => {
            options.success = fulfill;
            options.error = reject;
            return proto.fetch.call(self, options)
          });
        },
        save(attrs = {}, options = {}) {
          return new Promise((fulfill, reject) => {
            options.success = fulfill;
            options.error = reject;
            return proto.save.call(self, attrs, options)
          });
        },
        destroy(options = {}) {
          return new Promise((fulfill, reject) => {
            options.success = fulfill;
            options.error = reject;
            return proto.destroy.call(self, options)
          });
        }
      };

      return Model.extend(extend);
    }
  };

  return {
    Model: UtilModel
  }
})();

export default Util;