import Visitor from "../visitor";

/**
 * a visitor to process _embedded key.
 * @extends Visitor
 */
class EmbeddedVisitor extends Visitor {
  constructor(opts) {
    super(opts);
    this.opts = this.opts || {};
    }
    /**
     * 先从_embedded的key里面获取jsonapi格式所需的type（people），然后将这个type加入到内置的列表中。
     */
  visit(parent, key, obj) {
    if (!obj) {
      return;
    }
    let embedded = obj._embedded;
    if (embedded) {
      let relationships = {};
      if (!obj.relationships) {
        obj.relationships = {};
      }
      let kvps = this.getKvp(embedded);
      kvps.forEach(kvp => {
        let [k, v] = kvp;
        obj.relationships[k] = {data: embedded[k]};
        delete obj._embedded;
      });
      // console.log(embedded.roles[0]);
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
