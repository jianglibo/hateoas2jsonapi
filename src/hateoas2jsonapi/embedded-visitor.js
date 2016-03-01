import Visitor from "../visitor";

/**
 * a visitor to process _embedded key.
 * @extends Visitor
 */
class EmbeddedVisitor extends Visitor {
  constructor(opts) {
      super(opts);
      this.opts = this.opts;
    }
    /**
     * only process _embedded object.
     */
  visit(parent, key, obj) {
    if (obj && obj._embedded) {
      let embedded = obj._embedded;
      let relationships = {};
      if (!obj.relationships) {
        obj.relationships = {};
      }
      let kvps = this.getKvp(embedded);
      kvps.forEach(kvp => {
        let [k, v] = kvp;
        obj.relationships[k] = {
          data: embedded[k]
        };
        delete obj._embedded;
      });
    }
  }
}

export default EmbeddedVisitor;
/**
single
{
  "data": {
    "type": "articles",
    "id": "1",
    "attributes": {
      // ... this article's attributes
    },
    "relationships": {
      // ... this article's relationships
    }
  }
}
*/

/**
"_embedded": {
  "people": [ {
    "id": 4,

list
{
  "data": [{
    "type": "articles",
    "id": "1",
    "attributes": {
      // ... this article's attributes
    },
    "relationships": {
      // ... this article's relationships
    }
  }]
}
*/
