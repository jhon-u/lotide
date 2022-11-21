const middle = function(array) {
  if (array.length <= 2) return [];
  
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
};

module.exports = middle;