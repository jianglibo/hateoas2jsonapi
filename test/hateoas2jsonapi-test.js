import Hateoas2Jsonapi from "../src/hateoas2jsonapi/hateoas2jsonapi";
import person from "../fixtures/person";

describe('Hateoas2Jsonapi', () => {
  it('should equal', () => {
    let convertor = new Hateoas2Jsonapi();
    let result = convertor.convert(person());

    console.log(result);
    // expect(result.data._links).toBeTruthy();
    // expect(result.data.attributes._links).toBeFalsy();
    //
    // expect(result._embedded).toBeFalsy();
    // expect(result.data).toBeTruthy();
    // console.log(result.data.attributes);
  });
});
