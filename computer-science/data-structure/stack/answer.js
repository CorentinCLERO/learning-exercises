// ===== Stack Class for Exercises =====
class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    return this.items.length ? this.items.pop() : null;
  }
  peek() {
    return this.items.length ? this.items[this.items.length - 1] : null;
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
}

// ===== Test Helper =====
function test(fn, input, expected, description) {
  const result = fn(...input);
  const isEqual = Array.isArray(expected)
    ? Array.isArray(result) &&
      result.length === expected.length &&
      result.every((v, i) => v === expected[i])
    : result === expected;
  if (isEqual) {
    console.log(`✅ ${description}`, expected, "| Output:", result);
  } else {
    console.log(`❌ ${description}`, expected, "| Output:", result);
  }
}

// ===== EASY: Implement a Stack Push and Pop =====
// Implement a function that pushes all elements of an array onto a stack, then pops them all off and returns the popped elements in order.
function stackPushPop(arr) {
  const stack = new Stack();
  for (let i = 0; i < arr.length; i++) {
    stack.push(arr[i]);
  }
  const stackArray = [];
  while (stack.size() > 0) {
    const popedItem = stack.pop();
    stackArray.push(popedItem);
  }
  return stackArray;
}

// Test cases for EASY
test(
  stackPushPop,
  [[1, 2, 3]],
  [3, 2, 1],
  "stackPushPop([1,2,3]) should return [3,2,1]"
);
test(stackPushPop, [[42]], [42], "stackPushPop([42]) should return [42]");
test(stackPushPop, [[]], [], "stackPushPop([]) should return []");

// ===== NORMAL: Check for Balanced Parentheses =====
// Implement a function that returns true if the input string has balanced parentheses, false otherwise.
function isBalancedParentheses(str) {
  const stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") stack.push(str[i]);
    else if (str[i] === ")") {
      if (stack.size() > 0) stack.pop();
      else return false;
    }
  }
  return stack.size() === 0;
}

// Test cases for NORMAL
test(
  isBalancedParentheses,
  ["()"],
  true,
  'isBalancedParentheses("()") should return true'
);
test(
  isBalancedParentheses,
  ["(()())"],
  true,
  'isBalancedParentheses("(()())") should return true'
);
test(
  isBalancedParentheses,
  ["(()"],
  false,
  'isBalancedParentheses("(()") should return false'
);
test(
  isBalancedParentheses,
  [")("],
  false,
  'isBalancedParentheses(")(") should return false'
);
test(
  isBalancedParentheses,
  [""],
  true,
  'isBalancedParentheses("") should return true'
);

// ===== HARD: Evaluate Reverse Polish Notation (RPN) =====
// Implement a function that evaluates an arithmetic expression in Reverse Polish Notation.
// Example: ["2", "1", "+", "3", "*"] => ((2 + 1) * 3) = 9
function evalRPN(tokens) {
  const stack = new Stack();
  for (let i = 0; i < tokens.length; i++) {
    if (isNaN(tokens[i])) {
      const firstNumber = stack.pop();
      const secondNumber = stack.pop();
      let numbersResult;
      if (tokens[i] === "+") numbersResult = secondNumber + firstNumber;
      else if (tokens[i] === "-") numbersResult = secondNumber - firstNumber;
      else if (tokens[i] === "*") numbersResult = secondNumber * firstNumber;
      else if (tokens[i] === "/") numbersResult = secondNumber / firstNumber;
      stack.push(Math.trunc(numbersResult));
    } else stack.push(parseInt(tokens[i]));
  }
  return stack.pop();
}

// Test cases for HARD
test(
  evalRPN,
  [["2", "1", "+", "3", "*"]],
  9,
  'evalRPN(["2","1","+","3","*"]) should return 9'
);
test(
  evalRPN,
  [["4", "13", "5", "/", "+"]],
  6,
  'evalRPN(["4","13","5","/","+"]) should return 6'
);
test(
  evalRPN,
  [["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]],
  22,
  'evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]) should return 22'
);
test(evalRPN, [["3", "4", "+"]], 7, 'evalRPN(["3","4","+"]) should return 7');
test(evalRPN, [["5"]], 5, 'evalRPN(["5"]) should return 5');
