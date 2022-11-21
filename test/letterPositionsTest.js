const assert = require('chai').assert;
const letterPositions   = require('../letterPositions');

describe("#letterPositions", () => {
  it("returns '[3, 5, 15, 18]' for 'h'", () => {
    const result = letterPositions("lighthouse in the house");
    assert.deepEqual(result['h'], [3, 5, 15, 18]);
  });
});