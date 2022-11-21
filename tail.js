const tail = function(array) {
  const result = [];

  if (array.length <= 1) {
    return result;
  }

  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      continue;
    } else {
      result.push(array[i]);
    }
  }

  return result;
};

module.exports = tail;