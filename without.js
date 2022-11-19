const without = function(source, itemsToRemove) {
  const result = [];
  for (let item of source) {
    if (itemsToRemove.indexOf(item) === - 1) {
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

// TEST CODEse

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(["apple", "banana", "orange"], ['banana']), ["apple", "orange"]);
assertArraysEqual(without(["apple", "banana", "orange"], []), ["apple", "banana", "orange"]);
assertArraysEqual(without(["12", 12, 1, 2], [12]), ["12", 1, 2]);