import sum from "src/sum";
QUnit.test("sum test", (assert) => {
  assert.ok(sum(1, 2) == 3, "Passed!");
});
