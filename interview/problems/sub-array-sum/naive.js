function findSubArray(arr, sum) {
  let n = arr.length;
  let lastIndex = -1;
  let found = false;

  for (let i = 0; i < n; i++) {
    let total = 0;
    for (let j = i; j < n; j++) {
      let item = arr[j];
      total += item;
      if (total === sum) {
        lastIndex = j;
        found = true;
        break;
      }
    }
    if (found) {
      break;
    }
  }
  if (lastIndex === -1) {
    return "not found";
  } else {
    let total = 0;
    let subArray = [];
    while (total != sum) {
      let item = arr[lastIndex];
      total += item;
      subArray.push(item);
      lastIndex--;
    }
    return subArray;
  }
}


console.log(findSubArray([1, 4, 20, 3, 10, 5], 33))