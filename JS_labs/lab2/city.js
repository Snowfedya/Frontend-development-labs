/**
 * Форматирует информацию о городе.
 * @param {string} name - Название города.
 * @param {number} population - Население.
 * @param {number} area - Площадь.
 * @returns {string} - Отформатированная строка.
 */
function formatCityInfo(name, population, area) {
  return `Town ${name} has population of ${population} and area ${area} square km.`;
}

// Пример:
console.log(formatCityInfo('Moscow', 12636312, 2561)); 
// Town Moscow has population of 12636312 and area 2561 square km.

