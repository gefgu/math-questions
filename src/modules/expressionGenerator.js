import { evaluate } from "mathjs";

const generateExpression = () => {
  const expressionTemplates = [
    "a + b * c - d / e",
    "(a + b) * c - d / e",
    "a - b * (c + d) / e",
    "a - b / c + d * e",
    "a / b + c * d / e",
    "a - b * c + d * e",
    "a * b / c + d - e",
  ];

  let resultIsInteger = false;
  let finalExpression;
  do {
    let expression =
      expressionTemplates[
        Math.floor(Math.random() * expressionTemplates.length)
      ];
    ["a", "b", "c", "d", "e"].forEach((letter) => {
      expression = expression.replace(
        letter,
        Math.floor(Math.random() * 9 + 1)
      );
    });
    resultIsInteger = Number.isInteger(evaluate(expression));
    if (resultIsInteger) finalExpression = expression;
  } while (!resultIsInteger);
  return finalExpression;
};

export default generateExpression;
