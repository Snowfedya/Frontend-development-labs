/**
 * Объединяет три символа в строку.
 * @param {string} a - Первый символ.
 * @param {string} b - Второй символ.
 * @param {string} c - Третий символ.
 * @returns {string} - Результирующая строка.
 */
function combineChars(a, b, c) {
  return a + b + c;
}

// Примеры:
console.log(combineChars('a', 'b', 'c'));  // abc
console.log(combineChars('%', '2', '0'));  // %20
console.log(combineChars('1', '5', 'p'));  // 15p

