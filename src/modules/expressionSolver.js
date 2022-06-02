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

const solveUntilPatternOfTwoEnds = (expression, pattern) => {
  while (expression.match(pattern)) {
    const match = expression.match(pattern)[0];
    expression = expression.replace(match, solveTwoNumbersWithOperator(match));
  }
  return expression;
};

const solveFourPrimaryOperations = (expression) => {
  const twoNumbersWithSumOrSubtraction = /([0-9])+([-+])([0-9])+/g;
  const twoNumbersWithMultiplicationOrDivision = /([0-9])+([x÷])([0-9])+/g;
  expression = solveUntilPatternOfTwoEnds(
    expression,
    twoNumbersWithMultiplicationOrDivision
  );

  expression = solveUntilPatternOfTwoEnds(
    expression,
    twoNumbersWithSumOrSubtraction
  );

  return +expression;
};

const solveParentheses = (expression) => {
  const numbersInsideParentheses = /\(.+\)/g;

  while (expression.match(numbersInsideParentheses)) {
    const match = expression.match(numbersInsideParentheses)[0];
    const subMatch = match.substring(1, match.length - 1);
    if (subMatch.includes("(") && subMatch.includes(")")) {
      expression = expression.replace(match, `(${solveParentheses(subMatch)})`);
    } else {
      expression = expression.replace(
        match,
        solveFourPrimaryOperations(subMatch)
      );
    }
  }

  return expression;
};

const cleanExpression = (expression) => {
  expression = expression.replaceAll(" ", "").toLowerCase();
  expression = expression.replaceAll("[", "(").replaceAll("]", ")");
  return expression;
};

const solveExpression = (expression) => {
  expression = cleanExpression(expression);

  expression = solveParentheses(expression);

  expression = solveFourPrimaryOperations(expression);

  return +expression;
};

export default solveExpression;
