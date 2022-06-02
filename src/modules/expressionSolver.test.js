import solveExpression from "./expressionSolver";

describe("Solving Expressions", () => {
  test("Sum", () => {
    const expression = "6 + 4";
    expect(solveExpression(expression)).toBe(10);
  });

  test("Simple subtraction", () => {
    const expression = "6 - 4";
    expect(solveExpression(expression)).toBe(2);
  });

  test("Sum and Subtraction", () => {
    const expression = "6 - 4 + 3";
    expect(solveExpression(expression)).toBe(5);
  });

  test("Multiplication", () => {
    const expression = "6 x 3";
    expect(solveExpression(expression)).toBe(18);
  });

  test("Division", () => {
    const expression = "6 ÷ 3";
    expect(solveExpression(expression)).toBe(2);
  });

  test("Multiplication and Division", () => {
    const expression = "6 x 4 ÷ 3";
    expect(solveExpression(expression)).toBe(8);
  });

  test("Correct precedence", () => {
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

  test("Decimal Numbers", () => {
    const expression = "10 ÷ 3";
    expect(solveExpression(expression)).toBe(10 / 3);
  });
});
