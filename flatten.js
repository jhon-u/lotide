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

module.exports = flatten;