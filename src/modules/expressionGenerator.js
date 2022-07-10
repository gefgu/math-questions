const generateExpression = () => {
  const expressionTemplates = [
    "a + b * c - d / e",
    "a - b / c + d * e",
    "a / b + c * d / e",
    "a - b * c + d * e",
    "a * b / c + d - e",
  ];

  let expression =
    expressionTemplates[Math.floor(Math.random() * expressionTemplates.length)];
  ["a", "b", "c", "d", "e"].forEach((letter) => {
    expression = expression.replace(letter, Math.floor(Math.random() * 9 + 1));
  });
  return expression;
};

export default generateExpression;
