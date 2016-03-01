import Visitor from "../visitor";

/**
 * a visitor to process _embedded key.
 * @extends Visitor
 */
class CleanupVisitor extends Visitor {
  constructor(opts) {
      super(opts);
      this.opts = opts; //ie9,10
    }
    /**
     * only process _embedded object.
     */
  visit(parent, key, obj) {
    if (obj && obj.__is_model__) {
      delete obj.__is_model__;
    }
  }
}

export default CleanupVisitor;
