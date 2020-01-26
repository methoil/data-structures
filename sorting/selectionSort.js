const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  let smallestIndex = 0;
  for (let x = 0; x < array.length; x++) {
    for (let y = x; y < array.length; y++) {
      if (array[y] < array[smallestIndex]) {
        smallestIndex = y;
      }
    }
    // swap
    temp = array[x];
    array[x] = array[smallestIndex];
    array[smallestIndex] = temp;
  }
}

console.log(numbers);
selectionSort(numbers);
console.log(numbers);
