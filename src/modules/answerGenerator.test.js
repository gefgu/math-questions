import getAnswerInDirectOrder from "./answerGenerator";

describe("Run the forward order", () => {
  test("Direct order", () => {
    const expression = "9 - 3 * 4 + 2 * 5";
    const directAnswer = getAnswerInDirectOrder(expression);
    expect(directAnswer).toBe(130);
  });
});
