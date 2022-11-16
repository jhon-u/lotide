const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const results = {};
  
  for (let letter of string) {
    if (results[letter]) {
      results[letter] += 1;
    } else if (letter !== ' ') {
      results[letter] = 1;
    }
  }

  return results;
};

// TEST CODE

const result = countLetters("lighthouse in the house");
assertEqual(result['h'], 4);