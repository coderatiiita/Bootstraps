function mutate(inputArray, indices) {
  let oldArray = Array.from(inputArray);
  indices.forEach((item, index) => {
    inputArray[item] = oldArray[index];
  });
}

  let inputArray = ["a", "b", "c", "d", "e", "f"];
let indices = [2, 3, 4, 0, 5, 1];
mutate(inputArray, indices);

console.log(inputArray); //  [ 'd', 'f', 'a', 'b', 'c', 'e' ]
