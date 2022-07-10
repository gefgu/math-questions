import { evaluate } from "mathjs";
import getAnswerInDirectOrder from "./answerGenerator";
import shuffle from "./shuffleArray";

const generateExpression = () => {
  const expressionTemplates = [
    "a + b * c - d / e",
    "a - b / c + d * e",
    "a / b + c * d / e",
    "a - b * c + d * e",
    "a * b / c + d * e",
  ];

  let expression =
    expressionTemplates[Math.floor(Math.random() * expressionTemplates.length)];
  ["a", "b", "c", "d", "e"].forEach((letter) => {
    expression = expression.replace(letter, Math.floor(Math.random() * 10 + 1));
  });
  return expression;
};

function generateExpressionAndAnswers() {
  let finalExpression;
  let answersAreIntenger = false;
  do {
    let expression = generateExpression();
    if (
      Number.isInteger(evaluate(expression)) &&
      Number.isInteger(getAnswerInDirectOrder(expression))
    ) {
      answersAreIntenger = true;
      finalExpression = expression;
    }
  } while (!answersAreIntenger);

  let answers = [evaluate(finalExpression), getAnswerInDirectOrder(finalExpression)];
  answers = shuffle(answers);
  return { expression: finalExpression, answers };
}

export default generateExpressionAndAnswers;
