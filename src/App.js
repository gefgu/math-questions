import generateExpression from "./modules/expressionGenerator";
import solveExpression from "./modules/expressionSolver";

function App() {
  const expression = generateExpression();
  const correctResult = solveExpression(expression);

  return (
    <div className="container">
      <div className="question">
        <h1>Calcule:</h1>
        <h2>{expression}</h2>
      </div>
      <div>
        <p>a) {correctResult}</p>
        <p>b) {correctResult + 2}</p>
        <p>c) {correctResult - 5}</p>
        <p>d) {correctResult + 7}</p>
        <p>e) {correctResult - 10}</p>
      </div>
    </div>
  );
}

export default App;
