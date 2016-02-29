import NormalAttrsVisitor from "../../src/hateoas2jsonapi/normal-attrs-visitor";
import traversal from "../../src/json-traversal";
import people from "../../fixtures/people";

describe('NormalAttrsVisitor', () => {
  it('should equal', () => {
    let p = {
      id: 5,
      x: "x",
      y: "y",
      type: 'person',
      _links: {href: "url"},
      _embedded: {},
      ary: [1, 2, 3]
    };
    traversal(p, new NormalAttrsVisitor());

    let idtype = typeof p.id;
    expect(idtype).toEqual('string');
    expect(p.type).toBeTruthy();
    expect(p._links).toBeTruthy();
    expect(p._embedded).toBeTruthy();
    expect(p.attributes).toBeTruthy();
    expect(p.attributes.ary).toBeTruthy();
  });
});
