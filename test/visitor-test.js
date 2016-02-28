import visitor from "src/visitor";

describe('Visitor', () => {
  it('should not instanced', () => {
    var c = function() {
      let visitor = new Visitor();
    };
    expect(c).toThrow();
  });
});
