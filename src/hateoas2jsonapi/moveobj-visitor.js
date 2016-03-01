import Visitor from "../visitor";


function moveToAttributes(obj, k, value) {
  obj.attributes = obj.attributes || {};
  obj.attributes[k] = value;
  delete obj[k];
}

function moveToRelationships(obj, k, value) {
  obj.relationships = obj.relationships || {};
  obj.relationships[k] = {
    data: value
  };
  delete obj[k];
}

/**
 *  @extends Visitor
 */
class MoveobjVisitor extends Visitor {
  constructor(opts) {
      super(opts);
      this.opts = opts; //ie9,10
    }
    /**
     * process all object type in graph who is:
     *   in the model, but not in "attributes", "relationships"
     */
  visit(parent, key, obj) {
    if (obj && obj.__is_model__) {
      let keys = Object.keys(obj);
      let otherKeys = keys.filter(k => {
        return [this.opts.idField, "type", "attributes", "relationships", "__is_model__"].indexOf(k) === -1;
      });
      otherKeys.forEach(k => {
        let value = obj[k];
        if (Array.isArray(value) && value.length > 0) {
          let one = value[0];
          if (typeof one === 'object' && one.__is_model__) {
            moveToRelationships(obj, k, value);
          } else {
            moveToAttributes(obj, k, value);
          }
        } else if (typeof value === 'object' && value.__is_model__) {
          moveToRelationships(obj, k, value);
        } else {
          moveToAttributes(obj, k, value);
        }
      });
    }
  }
}

export default MoveobjVisitor;
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
