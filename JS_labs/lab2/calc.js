/**
 * Выполняет арифметическую операцию.
 * @param {number} a - Первое число.
 * @param {string} operator - Оператор (+, -, *, /).
 * @param {number} b - Второе число.
 * @returns {string} - Результат с округлением до 2 знаков.
 */
function calculate(a, operator, b) {
  let result;
  
  switch(operator) {
    case '+': result = a + b; break;
    case '-': result = a - b; break;
    case '*': result = a * b; break;
    case '/': result = a / b; break;
    default: return "Недопустимая операция";
  }
  
  return result.toFixed(2);
}

// Примеры:
console.log(calculate(5, '+', 10));    // 15.00
console.log(calculate(25.5, '-', 3));  // 22.50

