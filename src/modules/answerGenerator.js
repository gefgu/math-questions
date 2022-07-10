import { evaluate } from "mathjs";

function getAnswerInDirectOrder(expression) {
  expression = expression.replaceAll(" ", "");
  const twoNumberAndOperator = /\d+[-+/*]\d+/;
  while (expression.match(twoNumberAndOperator)) {
    const match = expression.match(twoNumberAndOperator)[0];
    expression = expression.replace(match, evaluate(match));
  }
  return +expression;
}

export default getAnswerInDirectOrder;
