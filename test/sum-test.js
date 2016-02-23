import sum from "src/sum";

describe('sum should right', () => {
  it('should equal', () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
