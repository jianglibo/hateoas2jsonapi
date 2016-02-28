/** Convertor abstract class */
class Convertor {
  /**
   * @param {Object} opts - options.
   */
  constructor(opts) {
      this.opts = opts;
    }
    /**
     * @param {Object} obj - the object to convert.
     * @return {Object} - converted object.
     */
  convert(obj) {}
}

export default Convertor;
