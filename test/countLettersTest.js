const assert = require('chai').assert;
const countLetters   = require('../countLetters');
console.log('countLetters', countLetters);
describe("#countLetters", () => {
  it("returns 4 for ['h']", () => {
    const result = countLetters("lighthouse in the house");
    assert.strictEqual(result['h'], 4);
  });
  it("returns 3 for ['o']", () => {
    const result = countLetters("Good morning!");
    assert.strictEqual(result['o'], 3);
  });
});