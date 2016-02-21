module.exports = function(hateoas, modelName, store) {
  let json = {
    type: modelName,
    attributes: {},
    relationships: {}
  };
  let keys = Object.keys(hateoas);

  keys.forEach((k) => {
    let v = hateoas[k];
    if (k === "id") {
      json.id = String(v);
    } else if (k === _links) {
      //skip now
    } else if (k === _embedded) {
      //sikp now.
    } else if (Array.isArray(v)) {
      let rn = singularize(k);
      if (store.modelFor(rn)) {
        json.relationships[k] = relationship(rn, v);
      } else {
        json.attributes[k] = v;
      }
    } else {
      json.attributes[k] = v;
    }
  });
  return json;
};
