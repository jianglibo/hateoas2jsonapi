import Ember from 'ember';

var all = {
  normalizeFindAllResponse: normalizeFindAllResponse,
  normalizeQueryResponse: normalizeFindAllResponse,
  normalizeQueryRecordResponse: normalizeQueryRecordResponse
};

export default function responseConverter(store, primaryModelClass, payload, id, hookName) {
  return all[hookName](store, primaryModelClass, payload, id);
}


const _embedded = "_embedded";
const _links = "_links";

function pluralize(name) {
  return Ember.Inflector.inflector.pluralize(name);
}

function singularize(name) {
  return Ember.Inflector.inflector.singularize(name);
}


function relationship(fn, ary) {
  return ary.map((it) => {
    return _convertOne(it, fn);
  });
}


function _convertOne(hateoas, modelName, store) {
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
}

function normalizeFindAllResponse(store, primaryModelClass, payload, id) {
  let modelName = primaryModelClass.modelName;
  let ary = payload['_embedded'][pluralize(modelName)];
  let nary = ary.map((it) => {
    return _convertOne(it, modelName, store);
  });
  return {
    data: nary
  };
}

function normalizeQueryRecordResponse(store, primaryModelClass, payload, id) {
  let modelName = primaryModelClass.modelName;
  let json = _convertOne(payload, modelName, store);
  return {
    data: json
  };
}


/*
var users = {
      "_links": {
        "self": {
          "href": "http://localhost/api/v1/people{?page,size,sort,projection}",
          "templated": true
        },
        "search": {
          "href": "http://localhost/api/v1/people/search"
        }
      },
      "_embedded": {
        "people": [ {
          "id": 4,
          "displayName": "96ad56@m3958.com",
          "name": "中文名",
          "enabled": "true",
          "roles": [{
            "name": "ROLE_USER",
            "id": 1
          }, {
            "name": "ROLE_USER_MANAGER",
            "id": 4
          }],
          "level": 1,
          "createdAt": "2015-09-01T14:42:00.273+0000",
          "lastScheduleExec": null,
          "avatar": "",
          "gender": "FEMAIL",
          "email": "96ad5c25402c4e57854510da6e1e6146@m3958.com",
          "ucOpenId": "96ad5c25402c4e57854510da6e1e6146",
          "_embedded": {
            "roles": [{
              "name": "ROLE_USER",
              "id": 1,
              "_links": {
                "self": {
                  "href": "http://localhost/api/v1/roles/1{?projection}",
                  "templated": true
                }
              }
            }, {
              "name": "ROLE_USER_MANAGER",
              "id": 4,
              "_links": {
                "self": {
                  "href": "http://localhost/api/v1/roles/4{?projection}",
                  "templated": true
                }
              }
            }]
          },
          "_links": {
            "self": {
              "href": "http://localhost/api/v1/people/4{?projection}",
              "templated": true
            },
            "roles": {
              "href": "http://localhost/api/v1/people/4/roles"
            },
            "taskLists": {
              "href": "http://localhost/api/v1/people/4/taskLists"
            },
            "keypairs": {
              "href": "http://localhost/api/v1/people/4/keypairs"
            }
          }
        }]
      },
      "page": {
        "size": 2,
        "totalElements": 3,
        "totalPages": 2,
        "number": 0
      }
    };

var jsonsUser = {
  "data": [{
    "type": "articles",
    "id": "1",
    "attributes": {
      // ... this article's attributes
    },
    "relationships": {
      "author": {
        "links": {
          "self": "http://example.com/articles/1/relationships/author",
          "related": "http://example.com/articles/1/author"
        },
        "data": { "type": "people", "id": "9" }
      }
    }
  }]
};
*/
