import sum from "src/sum";

describe('sum should right', function(){
  it('should equal', function(){
    expect(sum(1, 2)).toEqual(3);
  });
});
