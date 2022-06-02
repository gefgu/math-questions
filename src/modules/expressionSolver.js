const numberPattern = /[0-9]+/g;
const operatorPattern = /[+-]/g;

const solveTwoNumbersWithOperator = (expression) => {
  const operatorMapping = {
    "+": (a, b) => +a + +b,
    "-": (a, b) => +a - +b,
  };
  const numbers = expression.match(numberPattern);
  const operator = expression.match(operatorPattern);

  return operatorMapping[operator](numbers[0], numbers[1]);
};

const solveExpression = (expression) => {
  expression = expression.replaceAll(" ", "");
  const twoNumbersWithOperatorPattern = /([0-9])+([+-])([0-9])+/g;
  while (expression.match(twoNumbersWithOperatorPattern)) {
    const match = expression.match(twoNumbersWithOperatorPattern)[0];
    expression = expression.replace(
      twoNumbersWithOperatorPattern,
      solveTwoNumbersWithOperator(match)
    );
  }

  return +expression;
};

export default solveExpression;
