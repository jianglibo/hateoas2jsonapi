import Hateoas2Jsonapi from "../../src/hateoas2jsonapi/hateoas2jsonapi";
import person from "../../fixtures/person";
import people from "../../fixtures/people";

describe('Hateoas2Jsonapi', () => {
  it('should handle single person. init process.', () => {
    let convertor = new Hateoas2Jsonapi({modelName: "person", typePathMap: {person: {role: "roles|_embedded/roles"}}});
    let p = person();
    let result = convertor.convert(p, "person");

    expect(Object.keys(result)).toEqual(['data']);
    expect(result.data.relationships.roles.data).toBeTruthy();
    expect(result.data.type).toBeTruthy();
  });

  it('should handle list person. init process.', () => {
    // let convertor = new Hateoas2Jsonapi({modelName: "unknown"});
    // let peo = people();
    // let result = convertor.convert(peo, "person");
    // console.log(result);
    // expect(result.type).toBeTruthy();
  });
});
