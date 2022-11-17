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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];
const numbers = [3, 4, 9, 4, 2];

const results1 = map(words, word => word[0]);
const lhLength = map(lighthouses, lighthouse => lighthouse.length);
const doubles = map(numbers, number => number * 2);

// TEST CODE
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(lhLength, [ 15, 13, 11, 16, 10, 11, 10 ]);
assertArraysEqual(doubles, [6, 8, 18, 8, 4]);
