import "./styles/fonts.css";
import "./styles/app.css";

import generateExpression from "./modules/expressionGenerator";
import { solveExpression } from "./modules/expressionSolver";

function App() {
  const expression = generateExpression();
  const correctResult = solveExpression(expression);

  return (
    <div className="container">
      <div className="question">
        <h1>Resolva a Expressão:</h1>
        <h2 className="expression">{expression}</h2>
      </div>
      <div>
        <p className="answer">a) {correctResult}</p>
        <p className="answer">b) {correctResult + 2}</p>
        <p className="answer">c) {correctResult - 5}</p>
        <p className="answer">d) {correctResult + 7}</p>
        <p className="answer">e) {correctResult - 10}</p>
      </div>
    </div>
  );
}

export default App;
