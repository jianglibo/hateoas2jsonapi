import EmbeddedVisitor from "../../src/hateoas2jsonapi/embedded-visitor";
import traversal from "../../src/json-traversal";
import people from "../../fixtures/people";

describe('EmbeddedVisitor', () => {
  it('should equal', () => {
    let p = people();
    traversal(p, new EmbeddedVisitor());
    // console.log(p);
    expect(p.relationships.people.data).toBeTruthy();
    expect(Array.isArray(p.relationships.people.data)).toBeTruthy();
  });
});
