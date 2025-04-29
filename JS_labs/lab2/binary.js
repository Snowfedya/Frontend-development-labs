/**
 * Конвертирует 8-битное двоичное число в десятичное.
 * @param {string} binaryStr - Двоичное число (строка).
 * @returns {number} - Десятичное число.
 */
function binaryToDecimal(binaryStr) {
  // Проверка длины и допустимых символов
  if (binaryStr.length !== 8 || !/^[01]+$/.test(binaryStr)) {
    throw new Error("Некорректный ввод");
  }
  
  return parseInt(binaryStr, 2);
}

// Примеры:
console.log(binaryToDecimal('00001001')); // 9
console.log(binaryToDecimal('11110000')); // 240


