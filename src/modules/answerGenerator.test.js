import getAnswersFromExpression from "./answerGenerator";
import { evaluate } from "mathjs";

describe("Give appropriate answers", () => {
  const patternSumAndMinus = /\d[-+]\d/g;

  test("Give Correct Answers", () => {
    const expression = "8 - 9 * (4 + 2) / 9";
    const answers = getAnswersFromExpression(expression);
    expect(answers.includes(evaluate(expression))).toBe(true);
  });

  test("Ignore parentheses", () => {
    const expression = "8 - 9 * (4 + 2) / 9";
    const answers = getAnswersFromExpression(expression);
    expect(answers.includes(evaluate(expression.replace(/[)(]/g, "")))).toBe(
      true
    );
  });

  test("Sum and subtractions first", () => {
    const expression = "8 - 4 * 4 + 2 / 3";
    const answers = getAnswersFromExpression(expression);
    let wrongExpression = expression;
    while (wrongExpression.match(patternSumAndMinus).length > 1) {
      const match = wrongExpression.match(patternSumAndMinus)[0];
      wrongExpression = wrongExpression.replace(match, evaluate(match));
    }

    expect(answers.includes(8)).toBe(true);
  });
});
