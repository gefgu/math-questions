import {solveExpression} from "./expressionSolver";

const generateExpression = () => {
  const expressionTemplates = [
    "a + b x c - d ÷ e",
    "(a + b) x c - d ÷ e",
    "a - b x (c + d) ÷ e",
    "a - b ÷ c + d x e",
  ];

  const choosenTemplate =
    expressionTemplates[Math.floor(Math.random() * expressionTemplates.length)];

  let resultIsInteger = false;
  let finalExpression = choosenTemplate;
  do {
    let expression = choosenTemplate;
    ["a", "b", "c", "d", "e"].forEach((letter) => {
      expression = expression.replace(
        letter,
        Math.floor(Math.random() * 9 + 1)
      );
    });
    resultIsInteger = Number.isInteger(solveExpression(expression));
    if (resultIsInteger) finalExpression = expression;
  } while (!resultIsInteger);
  return finalExpression;
};

export default generateExpression;
