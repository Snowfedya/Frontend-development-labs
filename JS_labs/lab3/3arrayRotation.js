function rotateArray(arr, rotations) {
  rotations %= arr.length;
  for (let i = 0; i < rotations; i++) {
    arr.push(arr.shift());
  }
  console.log(arr.join(''));
}

// Пример:
rotateArray([51, 47, 32, 61, 21], 2); // 3261215147
