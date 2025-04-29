/**
 * Вычисляет сумму цифр числа.
 * @param {number} number - Исходное число.
 * @returns {number} - Сумма цифр.
 */
function sumDigits(number) {
  // Преобразуем число в строку и убираем возможный минус
  const str = Math.abs(number).toString();
  let sum = 0;
  
  // Суммируем каждую цифру
  for (const char of str) {
    sum += parseInt(char, 10);
  }
  
  return sum;
}

// Примеры использования:
console.log(sumDigits(245678)); // 32
console.log(sumDigits(97561));  // 28
console.log(sumDigits(543));    // 12

