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

module.exports = eqArrays;