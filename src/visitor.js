/**
 * as a convention, visitor only process one level deep object.
 */
class Visitor {
  /**
   * Create a visitor
   * @param {Handler[]} handlers - an array of handler. the order of handler is important.
   */
  constructor(opts) {
    this.opts = opts || {};
  }

  /**
   * entry point, deliver to actual handlers.de
   * @param {Object} - parent object, when is top object or is a member of array, this value is null.
   * @param {(string|Number)} - the key in parent object. when is member of array, this value is array index, or else is a string.
   * @param {Object} - the object to process.
   *
   */
  visit(parent, key, obj) {
  }

  /**
   * @param {Object} obj - get keyValue pairs of object.
   * @return {Object[]} - return array of {k:k, v:v}.
   */
  getKvp(obj) {
    return Object.keys(obj).map(k => {
      return [k, obj[k]];
    });
  }
}

export default Visitor;
