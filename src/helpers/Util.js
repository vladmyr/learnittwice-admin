import * as _ from "underscore";
import * as url from "url";
import * as config from "../config.json";

/**
 * Utility functionality provider
 * @type {Util}
 * @module
 */
const Util = (() => {
  const Model = {
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
    }
  };

  return {
    Model: Model
  }
})();

export default Util;