import Hateoas2Jsonapi from "../../src/hateoas2jsonapi/hateoas2jsonapi";
import person from "../../fixtures/person";
import people from "../../fixtures/people";
import {opts} from "../tutils";

describe('Hateoas2Jsonapi', () => {
  it('should handle single person. init process.', () => {
    let convertor = new Hateoas2Jsonapi(opts());
    let p = person();
    let result = convertor.convert(p, "person");

    let data = result.data;

    expect(Object.keys(result)).toEqual(['data']);
    expect(typeof data).toEqual('object');
    expect(data.relationships.roles.data).toBeTruthy();
    expect(Object.keys(data)).toEqual(["id", "type","relationships", "attributes"]);

    let relationships = data.relationships;
    expect(Object.keys(relationships)).toEqual(['creator', 'tasks', 'roles']);
    expect(Object.keys(relationships.roles)).toEqual(['data']);
    expect(Array.isArray(relationships.roles.data)).toBeTruthy();
  });

  it('should handle list person. init process.', () => {
    let convertor = new Hateoas2Jsonapi(opts());
    let peo = people();
    let result = convertor.convert(peo, "person");
    expect(Object.keys(result)).toEqual(["_links", "meta", "data"]);
    let data = result.data;
    expect(Array.isArray(data)).toBeTruthy();
  });
});
