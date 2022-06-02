const solveExpression = (expression) => {
  expression = expression.replaceAll(" ", "");
  const numberPattern = /[0-9]+/g;
  const operatorPattern = /[+]/g;

  const operatorMapping = {
    "+": (a, b) => +a + +b,
  };

  const numbers = expression.match(numberPattern);
  const operator = expression.match(operatorPattern);

  return operatorMapping[operator](numbers[0], numbers[1]);
};

export default solveExpression;
