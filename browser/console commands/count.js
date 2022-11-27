/*
Writes the number of times that count() has been invoked at the 
same line and with the same label. Call console.countReset([label]) to reset the count.

console.count([label])


*/

console.count(); // default: 1
console.count('manoj'); // manoj: 1
console.count(); // default: 2
console.count('manoj'); // manoj: 2
console.count('manoj'); // manoj: 3

// Resets the label
console.countReset('manoj')
console.count('manoj'); // manoj: 1
