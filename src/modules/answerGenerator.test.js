import getAnswersFromExpression from "./answerGenerator";

describe("Give appropriate answers", () => {
  test("Give Correct Answers", () => {
    const expression = "8 - 9 * (4 + 2) / 9";
    const answers = getAnswersFromExpression(expression);
    expect(answers.includes(2)).toBe(true);
  });

  test("Ignore parentheses", () => {
    const expression = "8 - 9 * (4 + 2) / 2";
    const answers = getAnswersFromExpression(expression);
    expect(answers.includes(-27)).toBe(
      true
    );
  });

  test("Sum and subtractions first", () => {
    const expression = "8 - 4 * 4 + 2 / 3";
    const answers = getAnswersFromExpression(expression);
    expect(answers.includes(8)).toBe(true);
  });

  test("One multiplication followed by all sums and subtractions", () => {
    const expression = "8 + 4 * 4 - 3 / 3";
    const answers = getAnswersFromExpression(expression);
    expect(answers.includes(7)).toBe(true);
  });

  test("One sum followed by correct procedure", () => {
    const expression = "8 + 4 * 4 - 3 / 3";
    const answers = getAnswersFromExpression(expression);
    expect(answers.includes(47)).toBe(true);
  });
});
