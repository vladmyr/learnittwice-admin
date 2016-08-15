'use strict';

class UtilBackbone {
  /**
   * Map Backbone's callback arguments to suit promises and pass them to promise creator function
   * @param   {Function}  resolve
   * @returns {Function}
   */
  static mapArgsHandler (resolve) {
    return (obj, res, opts) => {
      if (res.statusText == 'error') {
        return resolve(new Error(res.statusText));
      } else {
        return resolve({ obj, res, opts })
      }
    }
  }
}

export default UtilBackbone;