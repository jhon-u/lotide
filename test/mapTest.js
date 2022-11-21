const assert = require('chai').assert;
const map   = require('../map');

describe("#map", () => {
  const words = ["ground", "control", "to", "major", "tom"];
  const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];
  const numbers = [3, 4, 9, 4, 2];

  it("returns '[ 'g', 'c', 't', 'm', 't' ]'", () => {
    assert.deepEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
  });
  it("returns '[ 15, 13, 11, 16, 10, 11, 10 ]'", () => {
    assert.deepEqual(map(lighthouses, lighthouse => lighthouse.length), [ 15, 13, 11, 16, 10, 11, 10 ]);
  });
  it("returns '[6, 8, 18, 8, 4]'", () => {
    assert.deepEqual(map(numbers, number => number * 2), [6, 8, 18, 8, 4]);
  });
});