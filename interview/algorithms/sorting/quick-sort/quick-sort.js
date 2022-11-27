function swap(a, index1, index2) {
  let temp = a[index1];
  a[index1] = a[index2];
  a[index2] = temp;
}

function partition(A, start, end) {
  let p = end; // Change this: Pivot index
  let l = -1;
  let s = -1;

  do {
    // Find Larger index from left
    for (let i = start; i < end; i++) { // Excluding last item (pivot)
      if (A[i] > A[p]) {
        l = i;
        break;
      }
    }

    if (l === -1) {
      break;
    }

    // Find smaller index from right
    for (let j = end - 1; j >= start; j--) { // Excluding last item (pivot)
      if (A[j] < A[p]) {
        s = j;
        break;
      }
    }

    if (s === -1) {
      break;
    }

    // The trick is here
    if (l < s) {
      swap(A, l, s)
    }

  } while (l < s);

  if (l !== -1) {
    swap(A, p, l);
    p = l // Because we swapped elements
  }
  return p;
}

function quickSort(array, start, end) {

  if (start < end) { // Because this will take care when segment is invalid
    let p = partition(array, start, end); //creates partition and returns pivot index
    quickSort(array, start, p - 1);
    quickSort(array, p + 1, end);
  }

  return array;
}


const result = quickSort([6, 3, 9, 4, 0, 1, 4, 88, 33, 99, 456, 11], 0, 11);


console.log(result);