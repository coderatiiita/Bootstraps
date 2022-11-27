// Ascending order

function swap(a, index1, index2) {
  let temp = a[index1];
  a[index1] = a[index2];
  a[index2] = temp;
}

function bubbleSortAscending(a) {
  let N = a.length;

  for (let i = N - 1; i >= 1; i--) {
    for (let j = 0; j < i; j++) {
      if (a[j] > a[j + 1]) { // swap this for descending order
        swap(a, j, j + 1);
      }
    }
  }

  return a;
}

const result = bubbleSortAscending([1, 5, 3, 10, 9, 2, 4, 8, 0]);

console.log(result);

