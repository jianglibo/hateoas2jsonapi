import Visitor from "../visitor";
/**
 * a visitor process one item hateoas response.
 * @extends Visitor
 */
class ItemResponseVisitor extends Visitor {
  constructor(opts) {
      super(opts);
    }
    /**
     * if parent and key are both be null, this is a top level json object.
     */
  visit(parent, key, obj) {
    if (!(parent || key)) {
      if (!(obj.data || obj._embedded)) { // if has data attribute, may have been converted.
        let data = {};
        Object.keys(obj).forEach(k => {
          data[k] = obj[k];
          delete obj[k];
        });
        obj.data = data;
      }
    }
  }
}

export default ItemResponseVisitor;
