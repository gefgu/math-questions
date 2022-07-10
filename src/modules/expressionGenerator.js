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
  let answersAreEqual = true;
  do {
    let expression = generateExpression();
    let answers = [evaluate(expression), getAnswerInDirectOrder(expression)];
    console.log(answers);
    answersAreIntenger =
      Number.isInteger(answers[0]) &&
      Number.isInteger(answers[1]);
    answersAreEqual = answers[0] === answers[1];
    if (answersAreIntenger && !answersAreEqual) {
      finalExpression = expression;
      break;
    }
  } while (!answersAreIntenger || answersAreEqual);

  let answers = [
    evaluate(finalExpression),
    getAnswerInDirectOrder(finalExpression),
  ];
  answers = shuffle(answers);
  return { expression: finalExpression, answers };
}

export default generateExpressionAndAnswers;
