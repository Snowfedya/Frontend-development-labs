function processArray(arr) {
  let originalSum = 0;
  let modifiedSum = 0;
  const modifiedArr = arr.map((num, index) => {
    originalSum += num;
    if (num % 2 === 0) {
      const newNum = num + index;
      modifiedSum += newNum;
      return newNum;
    } else {
      const newNum = num - index;
      modifiedSum += newNum;
      return newNum;
    }
  });

  console.log(modifiedArr);
  console.log(originalSum);
  console.log(modifiedSum);
}

// Пример использования:
processArray([5, 15, 23, 56, 35]);
// [5, 14, 21, 59, 31], 134, 130
