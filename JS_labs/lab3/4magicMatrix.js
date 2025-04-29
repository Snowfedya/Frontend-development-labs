function isMagicMatrix(matrix) {
  const targetSum = matrix[0].reduce((a, b) => a + b, 0);

  // Проверка строк
  for (const row of matrix) {
    if (row.reduce((a, b) => a + b, 0) !== targetSum) return false;
  }

  // Проверка столбцов
  for (let col = 0; col < matrix[0].length; col++) {
    let sum = 0;
    for (let row = 0; row < matrix.length; row++) {
      sum += matrix[row][col];
    }
    if (sum !== targetSum) return false;
  }

  return true;
}

// Пример:
console.log(isMagicMatrix([[1,0,0], [0,0,1], [0,1,0]])); // true
