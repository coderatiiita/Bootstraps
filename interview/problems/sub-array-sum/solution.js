// Running a window and check sum is = or > the sub array total
// Works only for non negative

// Ot(n^2)
// Os(1)

function findSubArray(arr, sum) {

  let n = arr.length;
  let found = false;
  let total = 0;
  let subArray = [];

  for (let i = 0; i < n; i++) {
    let item = arr[i];
    subArray.push(item);
    total += item;

    if (total === sum) {
      found = true;
      break;
    } else if (total > sum) {
      while (total > sum) {
        let removeItem = subArray.shift();
        total -= removeItem;
      }
      if (total === sum) {
        found = true;
        break;
      }
    }
  }

  if (found) {
    return subArray;
  } else {
    return "not found"
  }
}


console.log(findSubArray([1, 4, 20, 3, 10, 5], 33))

