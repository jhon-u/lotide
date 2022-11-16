const eqArrays = function(arrayA, arrayB) {
  if (arrayA.length !== arrayB.length) return false;
  
  for (let index in arrayA) {
    if (arrayA[index] !== arrayB[index]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual  = function(arrayA, arrayB) {
  if (eqArrays(arrayA, arrayB)) {
    console.log(`✅✅✅ Assertion Passed: ${arrayA} === ${arrayB}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayA} !== ${arrayB}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  
  for (let index = 0; index < sentence.length; index++) {
    const letter = sentence[index];
    if (results[letter]) {
      results[letter].push(index);
    } else {
      results[letter] = [index];
    }
  }

  return results;
};

// TEST CODE

const result = letterPositions("lighthouse in the house");
assertArraysEqual(result['h'], [3, 5, 15, 18]);
