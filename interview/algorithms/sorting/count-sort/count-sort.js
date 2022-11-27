function countSort(array, max) {
  const N = array.length;
  let rangeArray = [];

  // Initialize range array to 0
  const rangeArray = Array(max + 1).fill(0);

  // Populate range array
  for (let i = 0; i < N; i++) {
    rangeArray[arr[i]]++;
  }

  // Add accumulatively;
  for (let k = 1; k <= max; k++) {
    rangeArray[k] = rangeArray[k - 1] + rangeArray[k];
  }

  // Right shift by 1 position
  rangeArray.unshift(0);
  rangeArray.pop();

  // Build the sorted array
  let sortedArray = [];

  for (let l = 0; l < N; l++) {
    let itemValue = array[l];
    let itemIndex = rangeArray[itemValue];

    sortedArray[itemIndex] = itemValue;
    rangeArray[itemValue]++;
  }

  return sortedArray;
}

const result = countSort([1, 0, 3, 1, 3, 1], 3);

console.log(result);
