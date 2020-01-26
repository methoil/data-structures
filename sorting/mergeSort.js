const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  // Split Array in into right and left
  const left = array.slice(0, array.length / 2);
  const right = array.slice(array.length / 2, array.length);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let lIdx = 0;
  let rIdx = 0;
  const merged = [];

  while (lIdx < left.length && rIdx < right.length) {
    if (left[lIdx] < right[rIdx]) {
      merged.push(left[lIdx]);
      lIdx++;
    } else {
      merged.push(right[rIdx]);
      rIdx++;
    }
  }

  const remaining =
    lIdx < left.length ? left.slice(lIdx, left.length) : right.slice(rIdx, right.length);
  merged.push(...remaining);
  return merged;
}

console.log(numbers);
const answer = mergeSort(numbers);
console.log(answer);
