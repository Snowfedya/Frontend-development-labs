/**
 * Округляет число до указанной точности.
 * @param {number} number - Число для округления.
 * @param {number} precision - Количество знаков после запятой (точность).
 * @returns {number} - Округленное число.
 */
function roundNumber(number, precision) {
  // Ограничиваем максимальную точность до 15, как указано в задании [5]
  if (precision > 15) {
    precision = 15;
  }

  // Округляем число до заданной точности с помощью toFixed()
  // toFixed() возвращает строку, поэтому используем parseFloat()
  // для преобразования обратно в число и удаления незначащих нулей [5]
  let roundedString = number.toFixed(precision);
  let roundedNumber = parseFloat(roundedString);

  return roundedNumber;
}

// Примеры использования из задания [5]:
console.log(`Округление 3.1415926535897932384 до 2 знаков: ${roundNumber(3.1415926535897932384, 2)}`); // Ожидаемый вывод: 3.14
console.log(`Округление 10.5 до 3 знаков: ${roundNumber(10.5, 3)}`); // Ожидаемый вывод: 10.5
console.log(`Округление 3.14 с точностью 20 (ограничится до 15): ${roundNumber(3.14, 20)}`); // Ожидаемый вывод: 3.14

