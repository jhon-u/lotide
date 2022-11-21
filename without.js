const without = function(source, itemsToRemove) {
  const result = [];
  for (let item of source) {
    if (itemsToRemove.indexOf(item) === - 1) {
      result.push(item);
    }
  }
  return result;
};

module.exports = without;