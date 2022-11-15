const translator = function(array) {
  let string = '';

  for (let i = 0; i < array.length; i ++) {
    for (let j = 0; j < array[i].length; j++) {
      if (j === 0) {
        continue;
      } else if (j < array[i].length - 1) {
        string += array[i][j];
      } else {
        string += array[i][j] + array[i][0] + 'ay';
      }
    }

    string += ' ';
  }

  return string;
};

const args = process.argv.slice(2);
console.log(translator(args));

/*  If the final program were called pig-latin.js, then the following Terminal commands show several example outputs.
    
    node pig-latin.js pig latin
    Result: igpay atinlay

    node pig-latin.js this is all just gibberish
    Result: histay siay llaay ustjay ibberishgay
*/