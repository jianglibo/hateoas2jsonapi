/**
 * @function
 * @param {Array} - array to traverse, if memeber if object, will traverse recusive, else you can process in parent node. if is array of array object, can not handle.
 * @param {Visitor}
 */
function traverseArray(ary, visitors) {
  ary.forEach((it, idx) => {
    if (typeof it === 'object') {
      traverse(it, visitors, null, idx);
    }
  });
}


export default function traverse(obj, visitors, parent, thekey) {
  if (!Array.isArray(visitors)) {
    visitors = [visitors];
  }
  if (obj) {
    let keys = Object.keys(obj);
    keys.forEach((k) => {
      let v = obj[k];
      if (Array.isArray(v)) {
        traverseArray(v, visitors);
      } else if (typeof v === 'object') {
        traverse(v, visitors, obj, k);
      }
    });
  }
  
  visitors.forEach(v => {
    v.visit(parent, thekey, obj);
  });
}
