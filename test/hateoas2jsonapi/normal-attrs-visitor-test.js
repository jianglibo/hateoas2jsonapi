import NormalAttrsVisitor from "../../src/hateoas2jsonapi/normal-attrs-visitor";
import EmbeddedVisitor from "../../src/hateoas2jsonapi/embedded-visitor";
import traversal from "../../src/json-traversal";
import Hateoas2Jsonapi from "../../src/hateoas2jsonapi/hateoas2jsonapi";
import people from "../../fixtures/people";
import person from "../../fixtures/person";


describe('NormalAttrsVisitor', () => {
  it('should process single person', () => {
    let p = person();
    let convertor = new Hateoas2Jsonapi({modelName: "person", typePathMap: {person: {role: "roles|_embedded/roles"}}});
    convertor._setvisitors(new NormalAttrsVisitor());
    let onePerson = convertor.convert(p, 'person');
    expect(onePerson.data).toBeTruthy();
    expect(onePerson.data.lastScheduleExec).toBeUndefined();
    expect(onePerson.data.attributes.lastScheduleExec).toBeNull();
  });

  it('should process list of person', () => {
    let p = people();
    let convertor = new Hateoas2Jsonapi({modelName: "person", typePathMap: {person: {role: "roles|_embedded/roles"}}});
    convertor._setvisitors(new EmbeddedVisitor(), new NormalAttrsVisitor());
    let result = convertor.convert(p, 'person');

    let onePerson = result.data[0];
    let role = result.data[0].relationships.roles.data[0];
    let relationships = onePerson.relationships;
    expect(relationships.roles.data[0].type).toEqual('role');
    expect(role.type).toEqual('role');
    expect(onePerson.lastScheduleExec).toBeUndefined();
    expect(onePerson.attributes.lastScheduleExec).toBeNull();
  });
});
