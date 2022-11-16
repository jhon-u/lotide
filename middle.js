const eqArrays = function(arrayA, arrayB) {
  if (arrayA.length !== arrayB.length) return false;

  for (let index in arrayA) {
    if (arrayA[index] !== arrayB[index]) {
      return false;
    }
  }
  
  return true
}

const assertArraysEqual  = function(arrayA, arrayB) {
  if (eqArrays(arrayA, arrayB)) {
    console.log(`✅✅✅ Assertion Passed: ${arrayA} === ${arrayB}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayA} !== ${arrayB}`);
  }
};

const middle = function(array) {
  if (array.length <= 2 ) return [];
  
  const result = [];
  
  if (array.length % 2 === 1) {
    const mid = Math.ceil(array.length / 2) - 1;
    result.push(array[mid]);
  }
  if (array.length % 2 === 0) {
    const mid = array.length / 2;
    result.push(array[mid - 1], array[mid]);
  }
  
  return result;
}

// TEST CODEse

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2])
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);  
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

