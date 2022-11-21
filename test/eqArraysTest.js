const assert = require('chai').assert;
const eqArrays   = require('../eqArrays');

describe("#eqArrays", () => {
  it("returns true for [[2, 3], [4]], [[2, 3], [4]]", () => {
    assert.isTrue(eqArrays([[2, 3], [4]], [[2, 3], [4]]));
  });
  it("returns false for [[2, 3], [4]], [[2, 3], [4, 5]]", () => {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]));
  });
  it("returns false for [[2, 3], [4]], [[2, 3], 4]", () => {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], 4]));
  });
  it("returns true for [[[[[[[[[[[[[1]]]]]]]]]]]]], [[[[[[[[[[[[[1]]]]]]]]]]]]]", () => {
    assert.isTrue(eqArrays([[[[[[[[[[[[[1]]]]]]]]]]]]], [[[[[[[[[[[[[1]]]]]]]]]]]]]));
  });
});