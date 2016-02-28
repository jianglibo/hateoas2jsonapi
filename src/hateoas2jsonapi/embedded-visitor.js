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
     * 先从_embedded的key里面获取jsonapi格式所需的type（people），然后将这个type加入到内置的列表中。
     */
  visit(parent, key, obj) {
    if (!obj) {
      return;
    }
    let embedded = obj._embedded;
    if (embedded) {

      let kvps = this.getKvp(embedded);

      if (kvps.length > 0) {
        let [k, v] = kvps[0]; //kvp: [{k: "people", v: [{id:33, name: 'xx'}]}] -- is a list || [{k: "creator", v: {id: 22, name: 'yy'}}] -- is an object.

        if (Array.isArray(v)) {
          v.forEach(it => {
            it.type = k;
          });
        } else {
          v.type = k;
        }
        // now become {_embedded: {people: [{id:xx, type: 'people'}]}} ==> {"data": [{id:xx, type: 'people'}]}
        obj.data = embedded[k];
        delete obj._embedded;
        return true;
      }
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
