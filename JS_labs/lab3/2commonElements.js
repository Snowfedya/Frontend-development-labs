function findCommonElements(arr1, arr2) {
  const common = [];
  for (const item of arr1) {
    if (arr2.includes(item) && !common.includes(item)) {
      common.push(item);
    }
  }
  console.log(common.join(' '));
}

// Пример:
findCommonElements(
  ['Hey', 'hello', 2, 4, 'Peter', 'e'],
  ['Petar', 10, 'hey', 4, 'hello', '2']
); // hello 4
