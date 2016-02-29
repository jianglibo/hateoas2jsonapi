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
     * move attributes to attributes field.
     */
  visit(parent, key, obj) {
    if (!obj) return;
    if (key === '_links') return;
    if (key === '_embedded') return;

    if (!(parent || key) && key === 'data') return;

    let kvps = this.getKvp(obj);
    let attributes = {};
    let {
      idField = "id"
    } = this.opts;

    kvps.forEach(kvp => {
      let [k, v] = kvp;
      if (k === idField) {
        obj[k] = String(v);
      } else if (k === "type" || k === "_embedded" || k === "_links") {
        noop();
      } else if (Array.isArray(v)) {
        if (v.length > 0) {
          if ((typeof v[0]) === 'object') {
            noop();
          } else {
            attributes[k] = v;
            delete obj[k];
          }
        } else {
          noop();
        }
      } else { //move to attributes.
        attributes[k] = v;
        delete obj[k];
      }
    });
    obj.attributes = attributes;
  }
}

function noop() {}

export default NormalAttrsVisitor;
