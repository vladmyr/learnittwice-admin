'use strict';

class UtilBackbone {
  /**
   * Map Backbone's callback arguments to suit promises and pass them to promise creator function
   * @param   {Function}  resolve
   * @returns {Function}
   */
  static mapArgsHandler (resolve) {
    return (obj, response, options) => {
      if (options.xhr.statusText == 'error') {
        return resolve(new Error(response.statusText));
      } else {
        return resolve({ obj, response, options })
      }
    }
  }
}

export default UtilBackbone;