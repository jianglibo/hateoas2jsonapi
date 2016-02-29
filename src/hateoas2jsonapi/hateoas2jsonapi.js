import traversal from "../json-traversal";
import EmbeddedVisitor from "./embedded-visitor";
import NormalAttrsVisitor from "./normal-attrs-visitor";
import ItemResponseVisitor from "./item-response-visitor";


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
    opts.idField = opts.idField || "id";
    opts.typePathMap = opts.typePathMap || {};
    this.opts = opts;
  }

  /**
   * @param {Object} model - the model to append type info in nested models.
   * @param {String} typePaths - the path to nested models. {role: "roles|_embedded/roles"}
   */
  processTypePaths(model, typePaths) {
      if (!typePaths) return;
      let keys = Object.keys(typePaths);

      keys.forEach(k => {
        let v = typePaths[k];
        if (v) {
          let pathes = v.split('|');
          pathes.forEach(p => {
            let segs = p.split("/");
            let nested = null;
            for (let i = 0; i < segs.length; i++) {
              nested = model[segs[i]];
              if (!nested) break;
            }
            if (nested) {
              if (Array.isArray(nested)) {
                nested.forEach(it => {
                    if (typeof it === 'object') {
                      it.type = k;
                    }
                });
              } else if (typeof nested === 'object') {
                nested.type = k;
              }
            }
          });
        }
      });
    }
    /**
     *
     */
  doInitProcess(obj, modelName) {
    let idField = this.opts.idField;
    let typePaths = this.opts.typePathMap[modelName];
    if (obj[idField]) { // it's single item response.
      obj.type = modelName; //TODO type attribute conflict.
      this.processTypePaths(obj, typePaths);
    } else { //it's list item response.
      if (obj._embedded) {
        let keys = Object.keys(obj._embedded);
        if (keys.length > 0) {
          let listobjs = obj._embedded[keys[0]];
          listobjs.forEach(it => {
            it.type = modelName;
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
    obj = this.doInitProcess(obj, modelName);
    let embeddedVisitor = new EmbeddedVisitor();
    let normalAttrsVisitor = new NormalAttrsVisitor();
    let itemResponseVisitor = new ItemResponseVisitor();
    // traversal(obj, embeddedVisitor);
    // traversal(obj, normalAttrsVisitor);
    // traversal(obj, itemResponseVisitor);
    return obj;
  }
}

export default Hateoas2Jsonapi;
