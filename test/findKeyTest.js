const assert = require('chai').assert;
const findKey   = require('../findKey');

describe("#findKey", () => {
  it("returns 'noma'", () => {
    assert.strictEqual(findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2),
    'noma');
  });
  it("returns 'Raptors'", () => {
    assert.strictEqual(findKey({
      "Lakers": { championships: 17 },
      "Warriors":   { championships: 7 },
      "Raptors":      { championships: 1 },
      "Celtics":   { championships: 17 },
      "Spurs":       { championships: 5 },
      "Bulls":  { championships: 6 }
    }, x => x.championships === 1),
    'Raptors');
  });
});