const findKeyByValue = function(obj, value) {
  let result;
  for (let key in obj) {
    if (obj[key] === value) result = key;
  }

  return result;
};

module.exports = findKeyByValue;