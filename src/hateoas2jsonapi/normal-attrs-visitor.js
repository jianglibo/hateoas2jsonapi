import Visitor from "../visitor";
/**
 * a visitor to process jsonapi attributes key.
 * @extends Visitor
 */
class NormalAttrsVisitor extends Visitor {
  constructor(opts) {
      super(opts);
      this.opts = this.opts || {}; // ie bellow 11 has problem. must add.
    }
    /**
     * move attributes to attributes field.
     */
  visit(parent, key, obj) {
    if (!obj) return;
    if (key === '_links') return;
    if (key === '_embedded') {
      throw new Error('_embedded must be processed before this visitor.');
    }

    // only if obj is a model.
    if (obj.__is_model__) {
      let kvps = this.getKvp(obj);
      let attributes = {};
      // let idField = (this.opts && this.opts.idField) || "id";
      let idField = this.opts.idField || "id";

      kvps.forEach(kvp => {
        let [k, v] = kvp;
        if (k === idField) {
          obj[k] = String(v);
        }  else if(!v) {
          attributes[k] = v;
          delete obj[k];
        } else if (k === "type" || (typeof v) === 'object' || (k === '__is_model__')) { //will not process relationships and attributes.
          noop();
        } else { //move to attributes.
          attributes[k] = v;
          delete obj[k];
        }
      });
      obj.attributes = attributes;
      delete obj.__is_model__;
    }
  }
}

function noop() {}

export default NormalAttrsVisitor;
