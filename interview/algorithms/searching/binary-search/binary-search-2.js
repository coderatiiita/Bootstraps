// Using Recursion
const binarySearch = (
  array,
  lowIndex, // 3
  highIndex, // 4
  n
) => {

  // n is not in range
  if ((n > array[highIndex]) || (n < array[lowIndex])) return -1;

  let midIndex = Math.floor((highIndex + lowIndex) / 2); //3

  if (n === array[midIndex]) { //3
    return midIndex;
  } else if (n > array[midIndex]) {
    return binarySearch(array, midIndex + 1, highIndex, n);
  } else {
    return binarySearch(array, lowIndex, midIndex - 1, n);
  }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 0, 5, 8));



