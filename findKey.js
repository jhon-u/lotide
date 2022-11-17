const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  let result;
  
  for (const key in object) {
    if (callback(object[key])) {
      result = key;
      break;
    }
  }

  return result;
};

const key1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

const key2 = findKey({
  "Lakers": { championships: 17 },
  "Warriors":   { championships: 7 },
  "Raptors":      { championships: 1 },
  "Celtics":   { championships: 17 },
  "Spurs":       { championships: 5 },
  "Bulls":  { championships: 6 }
}, x => x.championships === 1); // => "Ramptors"

// TEST CODE

assertEqual(key1, 'noma');
assertEqual(key2, 'Raptors');