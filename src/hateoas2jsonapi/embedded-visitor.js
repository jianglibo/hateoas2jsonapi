import Visitor from "../visitor";

/**
 * a visitor to process _embedded key.
 * @extends Visitor
 */
class EmbeddedVisitor extends Visitor {
  constructor(opts) {
      super(opts);
    }
    /**
     * only process _embedded object. we treat _embedded content as models. always.
     * if we find embedded object is not a model, an exception will be thrown.
     */
  visit(parent, key, obj) {
    if (obj && obj._embedded) {
      let embedded = obj._embedded;
      obj.relationships = obj.relationships || {};
      let kvps = this.getKvp(embedded);
      kvps.forEach(kvp => {
        let [k, v] = kvp;
        if (Array.isArray(v) && v.length > 0) {
          if (!v[0].__is_model__) {
            throw new Error('_embedded content must be models.');
          }
        } else if (typeof v === 'object' && !v.__is_model__) {
            throw new Error('_embedded content must be models.');
        }
        obj.relationships[k] = {
          data: v
        };
        delete obj._embedded;
      });
    }
  }
}

export default EmbeddedVisitor;
