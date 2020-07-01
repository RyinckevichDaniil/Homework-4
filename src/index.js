let height = +prompt('Введите ваше число:');

function xmasTree(pyramidHeight, symbol) {

    let xmas = '';
    for (let i = 1; i <= height; i++) {
      let row = '';
      for (j = 1; j <= i; j++) {
        row = row += '*';
      }
      xmas = xmas += row + '\n';
    }
    
    console.log(xmas);
    alert(xmas);
}

// Check your code
console.log(xmasTree(5, '*'));

module.exports = { xmasTree };