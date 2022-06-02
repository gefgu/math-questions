const numberPattern = /[0-9]+/g;
const operatorPattern = /[-+x÷]/g;

const solveTwoNumbersWithOperator = (expression) => {
  const operatorMapping = {
    "+": (a, b) => +a + +b,
    "-": (a, b) => +a - +b,
    x: (a, b) => a * b,
    "÷": (a, b) => a / b,
  };
  console.log(expression);
  const numbers = expression.match(numberPattern);
  const operator = expression.match(operatorPattern);

  return operatorMapping[operator](numbers[0], numbers[1]);
};

const solveUntilPatternEnds = (expression, pattern) => {
  while (expression.match(pattern)) {
    const match = expression.match(pattern)[0];
    expression = expression.replace(match, solveTwoNumbersWithOperator(match));
  }
  return expression;
};

const solveFourPrimaryOperations = (expression) => {
  const twoNumbersWithSumOrSubtraction = /([0-9])+([-+])([0-9])+/g;
  const twoNumbersWithMultiplicationOrDivision = /([0-9])+([x÷])([0-9])+/g;
  expression = solveUntilPatternEnds(
    expression,
    twoNumbersWithMultiplicationOrDivision
  );

  expression = solveUntilPatternEnds(
    expression,
    twoNumbersWithSumOrSubtraction
  );

  return expression;
};

// const solveParentheses = (expression) => {

//   return expression;
// }

const solveExpression = (expression) => {
  expression = expression.replaceAll(" ", "").toLowerCase();

  // const numbersInsideParentheses = /\(.+\)/g;

  // expression = solveParentheses()

  // while (expression.match(numbersInsideParentheses)) {
  //   const match = expression.match(numbersInsideParentheses)[0];
  //   console.log(expression);
  //   expression = expression.replace(match, 1);
  // }
  // console.log(parenthesesMatch.replace(/[()]/g, ""));

  expression = solveFourPrimaryOperations(expression);

  return +expression;
};

export default solveExpression;
