const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] < array[j]) {
        array = [
          ...array.slice(0, j),
          array[i],
          ...array.slice(j + 1, i),
          ...array.slice(i + 1, array.length)
        ];
        continue;
      }
      
    }
  }
  return array;
}

insertionSort(numbers);
console.log(numbers);
console.log(insertionSort(numbers));
