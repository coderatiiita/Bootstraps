
// Using While loop
const binarySearch = (array, n) => {

  let lowIndex = 0;
  let highIndex = array.length - 1;

  while (lowIndex <= highIndex) {

    let midIndex = Math.floor((highIndex + lowIndex) / 2);

    if (n === array[midIndex]) {
      return midIndex; // Found
    } else if (n > array[midIndex]) {
      lowIndex = midIndex + 1;
    } else {
      highIndex = midIndex - 1;
    }
  }

  return -1; // Not found
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 6));