import traversal from "../json-traversal";
import EmbeddedVisitor from "./embedded-visitor";
import NormalAttrsVisitor from "./normal-attrs-visitor";
import MoveobjVisitor from "./moveobj-visitor";
import CleanupVisitor from './cleanup-visitor';



/**
 * convertor to convert hateoas format to jsonapi.
 */
class Hateoas2Jsonapi {
  /**
   * Create a converter.
   * @param {Object} opts - config options.
   * @param {String} [opts.idField = "id"] - the id field name.
   * @param {String} opts.modelName - the model name.
   * @param {Object} opts.typePathMap - key is the model name, value is the path to the nested object. start from main object. {modelName: {nestedModelName: "roles|_embedded/roles"}}
   */
  constructor(opts) {
    opts = opts || {};
    this.opts = Object.assign({
      idField: "id",
      typePathMap: {}
    }, opts);
    this._setvisitors();
  }

  /**
   * Identify all models in object graph.
   * @param {Object} model - the model to append type info in nested models.
   * @param {String} typePaths - the path to nested models. {role: "roles|_embedded/roles"}
   */
  processTypePaths(model, typePaths) {
    // console.log(model._embedded.roles);
    if (!typePaths) return;
    let keys = Object.keys(typePaths);

    keys.forEach(k => {
      let v = typePaths[k];
      if (v) {
        let pathes = v.split('|');
        pathes.forEach(p => {
          let segs = p.split("/");
          let nested = model;
          for (let i = 0; i < segs.length; i++) {
            nested = nested[segs[i]];
            if (!nested) break;
          }
          if (nested) {
            if (Array.isArray(nested)) {
              nested.forEach(it => {
                // console.log(typeof it);
                if ((typeof it) === 'object') {
                  it.type = k;
                  it.__is_model__ = true;
                }
                // console.log(it);
              });
            } else if (typeof nested === 'object') {
              nested.type = k;
              nested.__is_model__ = true;
            }
          }
        });
      }
    });
  }

  /**
   * @param {(Visitor|Visitors)} visitors
   */
  _setvisitors(...visitors) {
      if (visitors.length === 0) {
        visitors.push(new EmbeddedVisitor(this.opts));
        visitors.push(new NormalAttrsVisitor(this.opts));
        visitors.push(new MoveobjVisitor(this.opts));
        visitors.push(new CleanupVisitor(this.opts));
      }
      this.visitors = visitors;
    }
    /**
     * process top level model.
     * @param {Object} obj - the origin object to convert.
     * @param {String} modelName - the model name of the response.
     * @return {Object} - normalized top level object.
     */
  doInitProcess(obj, modelName) {
    let idField = this.opts.idField;
    let typePaths = this.opts.typePathMap[modelName];
    if (obj[idField]) { // it's single item response.
      obj.type = modelName; //TODO type attribute conflict.
      obj.__is_model__ = true;
      this.processTypePaths(obj, typePaths);
      return {
        data: obj
      };
    } else { //it's list item response.
      if (obj._embedded) {
        let keys = Object.keys(obj._embedded);
        if (keys.length > 0) {
          let listobjs = obj._embedded[keys[0]];
          listobjs.forEach(it => {
            it.type = modelName;
            it.__is_model__ = true;
            this.processTypePaths(it, typePaths);
          });
          delete obj._embedded;
          obj.data = listobjs;
        }
      }
    }
    return obj;
  }

  /**
   * @param {Object} obj - hateoas format object.
   * @return {Object} - jsonapi format object.
   */
  convert(obj, modelName) {
    if (!(modelName && (typeof modelName) === 'string')) {
      throw new Error('modelName is required, and must be a string.');
    }
    obj = this.doInitProcess(obj, modelName);
    this.visitors.forEach(vt => {
      traversal(obj, vt);
    });
    return obj;
  }
}

export default Hateoas2Jsonapi;
