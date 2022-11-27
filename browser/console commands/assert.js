/*
Writes an error to the console when expression evaluates to false.

console.assert(expression, object)

*/

const x = 5;
const y = 3;
const reason = 'x is expected to be less than y';
console.assert(x < y, {x, y, reason});
/*
Assertion failed: {x: 5, y: 3, reason: 'x is expected to be less than y'}
*/