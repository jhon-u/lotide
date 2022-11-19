const eqArrays = function(arrayA, arrayB) {
  if (arrayA.length !== arrayB.length) return false;
  for (let index in arrayA) {
    if (Array.isArray(arrayA[index]) !== Array.isArray(arrayB[index])) return false;
    if (Array.isArray(arrayA[index])) {
      if (!eqArrays(arrayA[index], arrayB[index])) return false;
    } else if (arrayA[index] !== arrayB[index]) {
      return false;
    }
  }
  return true;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); // => false

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false
assertEqual(eqArrays([[[[[[[[[[[[[1]]]]]]]]]]]]], [[[[[[[[[[[[[1]]]]]]]]]]]]]), true); // => true