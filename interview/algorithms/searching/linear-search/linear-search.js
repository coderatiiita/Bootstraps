const linearSearch = (array, n) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) {
      return i; // Found
    }
  }
  return false; // Not found
}

console.log(linearSearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
