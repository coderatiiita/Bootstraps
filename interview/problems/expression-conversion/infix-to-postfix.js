/*
* Conversion can be done using a stack

? Algorithm
Step 1: Start from left to right
Step 2: Keep adding the operands to the final expression
Step 3: If an operator is found, push it to stack
Step 4: If a second operand is found, check if the operand on top of stack has higher precedence than the current operand
Step 5: If NO, then push() the operand to the stack
Step 6: If YES, pop() all the contents of the stack to the final expression. 
Step 7: Push() the current operand to the stack.
Step 8: Move on ...

*/

//? Program

let Stack = require("../../data-structures/stack/right-ended");

function getPrecedence(op) {
  switch (op) {
    case "+":
    case "-":
      return 1;
    case "*":
    case "/":
      return 2;

    case "^":
      return 3;

    default:
      return -1;
  }
}

function convertInfixToPostfix(infix) {
  let operators = ["+", "-", "*", "/", "^"];
  let postfix = "";
  let infixArr = infix.split("");

  let stack = new Stack();

  infixArr.forEach((element) => {
    if (element === "(") {
      // Push it to stack (highest precedence)
      stack.push(element);
    } else if (element === ")") {
      // Pop until "(" is encountered
      while (!stack.isEmpty() && stack.peek() != "(") {
        postfix += stack.pop();
      }
      // Get rid of "(" to the top of stack
      stack.pop();
    } else if (operators.includes(element)) {
      // Element is an Operator
      if (!stack.isEmpty()) {
        if (getPrecedence(element) < getPrecedence(stack.peek())) {
          // Pop the stack and put the current operator to the stack
          while (stack.peek()) {
            postfix += stack.pop();
          }
          stack.push(element);
        } else {
          // Current operator precedence is less. So push to stack
          stack.push(element);
        }
      } else {
        // Stack is null
        stack.push(element);
      }
    } else {
      // Element is an Operand
      postfix += element;
    }
  });

  // Pop remaining items in stack
  while (stack.peek()) {
    postfix += stack.pop();
  }

  return postfix;
}

let infix = "(a+b)*c";
console.log(convertInfixToPostfix(infix)); //ab+c*
