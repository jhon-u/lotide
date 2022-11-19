const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;
  for (let key in object1) {
    if (typeof object1[key] === 'object' && !Array.isArray(object1[key])) {
      return eqObjects(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};

// TEST CODE

const ab = { a: { z: 1 }, b: 2 };
const ac = { a: { z: 1 }, b: 2 };
assertEqual(eqObjects(ab, ac), true); // => true

const ba = { a: { y: 0, z: 1 }, b: 2 };
const bc = { a: { z: 1 }, b: 2 };
assertEqual(eqObjects(ba, bc), false); // => false

const cb = { a: { y: 0, z: 1 }, b: 2 };
const cd = { a: 1, b: 2 };
assertEqual(eqObjects(cb, cd), false); // => false