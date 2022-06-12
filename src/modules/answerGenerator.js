import math, { evaluate } from "mathjs";

const patternSumAndMinus = /\d*[-+]\d*/g;
const patternMultiplyAndDivide = /\d*[*/]\d*/g;

const getAnswerWithoutParentheses = (expression) => {
  return evaluate(expression.replace(/[)(]/g, ""));
};

const getAnswerWithSumFirst = (expression) => {
  let wrongExpression = expression.replaceAll(" ", "");
  while (wrongExpression.match(patternSumAndMinus)) {
    const match = wrongExpression.match(patternSumAndMinus)[0];
    wrongExpression = wrongExpression.replace(match, evaluate(match));
  }
  return evaluate(wrongExpression);
};

const getAnswerFromOneMultiplicationFollowedBySums = (expression) => {
  let wrongExpression = expression.replaceAll(" ", "");
  const match = wrongExpression.match(patternMultiplyAndDivide)[0];
  wrongExpression = wrongExpression.replace(match, evaluate(match));
  return getAnswerWithSumFirst(wrongExpression);
};

const getAnswersFromExpression = (expression) => {
  let answers = [];

  const correctAnswer = evaluate(expression);
  const answerWithoutParentheses = getAnswerWithoutParentheses(expression);
  const answerWithSumFirst = getAnswerWithSumFirst(expression);
  const answerFromOneMultiplicationFollowedBySums =
    getAnswerFromOneMultiplicationFollowedBySums(expression);

  answers = answers.concat(
    correctAnswer,
    answerWithoutParentheses,
    answerWithSumFirst,
    answerFromOneMultiplicationFollowedBySums
  );

  return answers;
};

export default getAnswersFromExpression;
