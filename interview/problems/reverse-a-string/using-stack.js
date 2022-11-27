let Stack = require("../../data-structures/stack/right-ended");

function reverseString(str) {
  let result = "";
  let stack = new Stack();

  let strArr = str.split("");

  strArr.forEach((element) => {
    stack.push(element);
  });

  while (!stack.isEmpty()) {
    result += stack.pop();
  }

  return result;
}

let str = "ABCD";
console.log(reverseString(str));
