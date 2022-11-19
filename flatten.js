const flatten = function(array) {
  const result = [];
  
  for (let item of array) {
    if (Array.isArray(item)) {
      for (let innerItem of item) {
        result.push(innerItem);
      }
    } else {
      result.push(item);
    }
  }

  return result;
};

const eqArrays = function(arrayA, arrayB) {
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

// TEST CODE

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
