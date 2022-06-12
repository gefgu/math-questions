import { evaluate } from "mathjs";

const getAnswerWithoutParentheses = (expression) => {
  return evaluate(expression.replace(/[)(]/g, ""));
};

const getAnswersFromExpression = (expression) => {
  let answers = [];

  const correctAnswer = evaluate(expression);
  const answerWithoutParentheses = getAnswerWithoutParentheses(expression);

  answers = answers.concat(correctAnswer, answerWithoutParentheses);

  return answers;
};

export default getAnswersFromExpression;
