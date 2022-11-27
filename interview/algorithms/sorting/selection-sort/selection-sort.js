function swap(a, index1, index2) {
  let temp = a[index1];
  a[index1] = a[index2];
  a[index2] = temp;
}

function selectionSortAsc(a) {
  const N = a.length;
  let currentMinimumIndex;

  for (let i = 0; i < N; i++) {
    // set minimum to this position
    currentMinimumIndex = i;

    //check the rest of the a to see if anything is smaller
    for (let j = i + 1; j < N; j++) {
      if (a[j] < a[currentMinimumIndex]) {
        currentMinimumIndex = j;
      }

      //if the minimum isn't in the position, swap it
      if (i != currentMinimumIndex) {
        swap(a, i, currentMinimumIndex);
      }
    }
  }

  return a;
}


const result = selectionSortAsc([3, 2, 5, 6, 8, 1, 0]);

console.log(result);