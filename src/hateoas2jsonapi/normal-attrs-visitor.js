import Visitor from "../visitor";
/**
 * a visitor to process jsonapi attributes key.
 * @extends Visitor
 */
class NormalAttrsVisitor extends Visitor {
  constructor(opts) {
      super(opts);
    }
    /**
     * move attributes to attributes field. We only care about model object.
     * @param {Object} parent - parent context.
     * @param {String} key - current object's key in parent object.
     * @param {Object} obj - the object to process.
     */
  visit(parent, key, obj) {
    // only if obj is a model.
    if (obj && obj.__is_model__) {
      let kvps = this.getKvp(obj);
      let attributes = {};
      // let idField = (this.opts && this.opts.idField) || "id";
      let idField = this.opts.idField;

      kvps.forEach(kvp => {
        let [k, v] = kvp;
        let needMove = false;
        if (k === idField) {
          obj[k] = String(v);
        }  else if(!v) {
          needMove = true;
        } else if (k === "type" || (typeof v) === 'object' || (k === '__is_model__')) { //will not process relationships and attributes.
            needMove = false;
        } else { //move to attributes.
          needMove = true;
        }
        if (needMove) {
          attributes[k] = v;
          delete obj[k];
        }
      });
      obj.attributes = attributes;
    }
  }
}

export default NormalAttrsVisitor;
