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

module.exports = findKey;