/*
Starts a new timer. Call console.timeEnd([label]) to stop the 
timer and print the elapsed time to the Console.

*/

console.time();
for (var i = 0; i < 100000; i++) {
  let square = i ** 2;
}
console.timeEnd();

//Output: default: 22.627ms
