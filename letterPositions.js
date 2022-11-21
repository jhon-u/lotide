const letterPositions = function(sentence) {
  const results = {};
  
  for (let index = 0; index < sentence.length; index++) {
    const letter = sentence[index];
    if (results[letter]) {
      results[letter].push(index);
    } else {
      results[letter] = [index];
    }
  }

  return results;
};

module.exports = letterPositions;