import EmbeddedVisitor from "../../src/hateoas2jsonapi/embedded-visitor";
import traversal from "../../src/json-traversal";
import people from "../../fixtures/people";

describe('EmbeddedVisitor', () => {
  it('should equal', () => {
    let p = people();
    traversal(p, new EmbeddedVisitor());

    expect(p.data).toBeTruthy();
    expect(p._embedded).toBeFalsy();
    expect(p._links).toBeTruthy();
    expect(p.page).toBeTruthy();
    expect(p.data[0]._embedded).toBeFalsy();

    expect(p.data[0].roles).toBeTruthy();

  });
});
