import traversal from "../json-traversal";
import EmbeddedVisitor from "./embedded-visitor";
import NormalAttrsVisitor from "./normal-attrs-visitor";
import ItemResponseVisitor from "./item-response-visitor";
import Convertor from "../convertor";


/**
 * convertor to convert hateoas format to jsonapi.
 * @extends Convertor
 */
class Hateoas2Jsonapi extends Convertor {
  constructor(opts) {
    super(opts);
  }

  convert(obj) {
    let embeddedVisitor = new EmbeddedVisitor();
    let normalAttrsVisitor = new NormalAttrsVisitor();
    let itemResponseVisitor = new ItemResponseVisitor();
    traversal(obj,embeddedVisitor);
    traversal(obj, normalAttrsVisitor);
    traversal(obj, itemResponseVisitor);
    return obj;
  }
}

export default Hateoas2Jsonapi;
