/**
 * Рассчитывает стоимость проживания группы в отеле.
 * @param {number} count - Количество человек в группе.
 * @param {string} type - Тип группы ("Students", "Corporate", "Regular").
 * @param {string} day - День недели ("Friday", "Saturday", "Sunday").
 * @returns {string} - Сообщение с общей ценой, отформатированной до 2 знаков.
 */
function calculateVacationPrice(count, type, day) {
  // Таблица цен за одного человека [5]
  const prices = {
    "Students": {"Friday": 8.45, "Saturday": 9.80, "Sunday": 10.46},
    "Corporate": {"Friday": 10.90, "Saturday": 15.60, "Sunday": 16},
    "Regular": {"Friday": 15, "Saturday": 20, "Sunday": 22.50}
  };

  // Проверяем, есть ли такой тип группы и день недели в таблице
  if (!prices[type] || !prices[type][day]) {
    return "Некорректный тип группы или день недели.";
  }

  // Рассчитываем базовую стоимость
  let basePricePerPerson = prices[type][day];
  let totalPrice = basePricePerPerson * count;

  // Применяем скидки в указанном порядке [5]
  if (type === "Students" && count >= 30) {
    totalPrice *= 0.85; // Скидка 15%
  } else if (type === "Corporate" && count >= 100) {
    totalPrice -= basePricePerPerson * 10; // 10 человек бесплатно
  } else if (type === "Regular" && count >= 10 && count <= 20) {
    totalPrice *= 0.95; // Скидка 5%
  }

  // Форматируем результат до двух знаков после запятой [5]
  return `Общая цена: ${totalPrice.toFixed(2)}`;
}

// Примеры использования из задания [5]:
console.log(`Расчет для 30 Students в Sunday: ${calculateVacationPrice(30, "Students", "Sunday")}`); // Ожидаемый вывод: Общая цена: 266.73
console.log(`Расчет для 40 Regular в Saturday: ${calculateVacationPrice(40, "Regular", "Saturday")}`); // Ожидаемый вывод: Общая цена: 800.00
console.log(`Расчет для 120 Corporate в Friday: ${calculateVacationPrice(120, "Corporate", "Friday")}`); // (10.90 * 120) - (10.90 * 10) = 1308 - 109 = 1199. Ожидаемый вывод: Общая цена: 1199.00
console.log(`Расчет для 15 Regular в Friday: ${calculateVacationPrice(15, "Regular", "Friday")}`);   // (15 * 15) * 0.95 = 225 * 0.95 = 213.75. Ожидаемый вывод: Общая цена: 213.75

