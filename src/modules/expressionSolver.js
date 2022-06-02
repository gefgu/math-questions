const numberPattern = /[0-9]+/g;
const operatorPattern = /[-+x÷]/g;

const solveTwoNumbersWithOperator = (expression) => {
  const operatorMapping = {
    "+": (a, b) => +a + +b,
    "-": (a, b) => +a - +b,
    x: (a, b) => a * b,
    "÷": (a, b) => a / b,
  };
  const numbers = expression.match(numberPattern);
  const operator = expression.match(operatorPattern);

  return operatorMapping[operator](numbers[0], numbers[1]);
};

const solveExpression = (expression) => {
  expression = expression.replaceAll(" ", "").toLowerCase();
  const twoNumbersWithSumOrSubtraction = /([0-9])+([-+])([0-9])+/g;
  const twoNumbersWithMultiplicationOrDivision = /([0-9])+([x÷])([0-9])+/g;

  while (expression.match(twoNumbersWithMultiplicationOrDivision)) {
    const match = expression.match(twoNumbersWithMultiplicationOrDivision)[0];
    expression = expression.replace(match, solveTwoNumbersWithOperator(match));
  }

  while (expression.match(twoNumbersWithSumOrSubtraction)) {
    const match = expression.match(twoNumbersWithSumOrSubtraction)[0];
    expression = expression.replace(match, solveTwoNumbersWithOperator(match));
  }

  return +expression;
};

export default solveExpression;
