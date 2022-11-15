const reverse = function(array) {
  for (let i = 0; i < array.length; i ++) {
    let reversed = '';
    for (let j = array[i].length - 1; j >= 0; j--) {
      reversed += array[i][j];
    }
    console.log(reversed);
  }
};

const args = process.argv.slice(2);
reverse(args);