import solveExpression  from "./expressionSolver";

describe("Solving Expressions", () => {

  test.only("Sum", () => {
    const expression = "6 + 4";
    expect(solveExpression(expression)).toBe(10);
  });

  test.only("Simple subtraction", () => {
    const expression = "6 - 4";
    expect(solveExpression(expression)).toBe(2);
  });

  test.only("Sum and Subtraction", () => {
    const expression = "6 - 4 + 3";
    expect(solveExpression(expression)).toBe(5);
  });

  test.only("Multiplication", () => {
    const expression = "6 x 3";
    expect(solveExpression(expression)).toBe(18);
  });

  test.only("Division", () => {
    const expression = "6 ÷ 3";
    expect(solveExpression(expression)).toBe(2);
  });

  test.only("Multiplication and Division", () => {
    const expression = "6 x 4 ÷ 3";
    expect(solveExpression(expression)).toBe(8);
  });

  test.only("Correct precedence", () => {
    const expression = "6 + 4 x 3 - 6 ÷ 3";
    expect(solveExpression(expression)).toBe(16);
  });

  test("Correct precedence using parentheses", () => {
    const expression = "(6 + 4) x 3 - 6 ÷ 3";
    expect(solveExpression(expression)).toBe(28);
  });

  test("General Expression with parentheses and brackets", () => {
    const expression = "[30 + 2 x (5-3)] x 2 - 10";
    expect(solveExpression(expression)).toBe(58);
  });
});
