const assert = require('chai').assert;
const eqObjects   = require('../eqObjects');

describe("#eqObjects", () => {
  it("returns 'true' for '{ a: { z: 1 }, b: 2 } = { a: { z: 1 }, b: 2 }'", () => {
    const ab = { a: { z: 1 }, b: 2 };
    const ac = { a: { z: 1 }, b: 2 };
    assert.deepEqual(eqObjects(ab, ac), true);
  });
  it("returns 'false' for '{ a: { y: 0, z: 1 }, b: 2 } = { a: { z: 1 }, b: 2 }'", () => {
    const ba = { a: { y: 0, z: 1 }, b: 2 };
    const bc = { a: { z: 1 }, b: 2 };
    assert.deepEqual(eqObjects(ba, bc), false);
  });
  it("returns 'false' for '{ a: { y: 0, z: 1 }, b: 2 } = { a: { z: 1 }, b: 2 }'", () => {
    const cb = { a: { y: 0, z: 1 }, b: 2 };
    const cd = { a: 1, b: 2 };
    assert.deepEqual(eqObjects(cb, cd), false);
  });
});
