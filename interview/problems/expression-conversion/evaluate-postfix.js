/*

? Algorithm
Step 1: Scan from left to right & look for the occurance of an operand
Step 2: Apply the operation for the left 2 operands and place the value

*/

let Stack = require("../../data-structures/stack/right-ended");

function performOperation(operand1, operand2, operator) {
  switch (operator) {
    case "+":
      return operand1 + operand2;
    case "-":
      return operand1 - operand2;
    case "*":
      return operand1 * operand2;
    case "/":
      return operand1 / operand2;
    case "^":
      return operand1 ^ operand2;
  }
}

function evaluatePostfix(postfix) {
  let operators = ["+", "-", "*", "/", "^"];

  let stack = new Stack();

  let postfixArr = postfix.split("");

  postfixArr.forEach((element) => {
    if (operators.includes(element)) {
      // Element is Operator
      let operand2 = stack.pop();
      let operand1 = stack.pop();

      let result = performOperation(
        Number(operand1),
        Number(operand2),
        element
      );
      stack.push(String(result));
    } else {
      // Element is Operand
      stack.push(element);
    }
  });

  return stack.pop();
}

let postfix = "231*+9-";
console.log(evaluatePostfix(postfix));
