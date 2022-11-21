const assert = require('chai').assert;
const without   = require('../without');

describe("#without", () => {
  it("returns '[2, 3]' for '[1]'", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it("returns '['1', '2']' for '[1, 2, '3']'", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
  it("returns '['apple', 'orange']' for '['banana']'", () => {
    assert.deepEqual(without(["apple", "banana", "orange"], ['banana']), ["apple", "orange"]);
  });
  it("returns '['apple', 'banana', 'orange'] for '[]'", () => {
    assert.deepEqual(without(["apple", "banana", "orange"], []), ["apple", "banana", "orange"]);
  });
  it("returns '['12', 1, 2]' for '[12]", () => {
    assert.deepEqual(without(["12", 12, 1, 2], [12]), ["12", 1, 2]);
  });
});