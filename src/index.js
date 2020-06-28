function xmasTree(pyramidHeight, symbol) {

    var height = Number(prompt('Введите ваше число:'));

    var xmas = '';
    for (let i = 0; i <= height; i++) {
      let row = '';
      for (j = 0; j <= i; j++) {
        row = row += '*';
      }
      xmas = xmas += row + '\n';
    }
    
    alert(xmas);
    console.log(xmas);

}

// Check your code
console.log(xmasTree(5, '*'));