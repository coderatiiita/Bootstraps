  function swap(a, index1, index2) {
    let temp = a[index1];
    a[index1] = a[index2];
    a[index2] = temp;
  }

  function insertionSortAsc(a) {
    let N = a.length;

    for (let i = 1; i < N; i++) {
      // Because i=0 is already sorted
      for (let j = i; j > 0; j--) {
        //Keep swapping until inserted in the right spot
        if (a[j] < a[j - 1]) {
          swap(a, j, j - 1);
        } else {
          break;
        }
      }
    }

    return a;
  }

  const result = insertionSortAsc([3, 2, 5, 6, 8, 1, 0]);

  console.log(result);
