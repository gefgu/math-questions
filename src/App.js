import "./styles/fonts.css";
import "./styles/app.css";

import generateExpression from "./modules/expressionGenerator";
import {
  getFourWrongAnswersFromExpression,
  solveExpression,
} from "./modules/expressionSolver";
import shuffle from "./modules/shuffleArray";

function App() {
  const expression = generateExpression();
  const correctResult = solveExpression(expression);
  console.log(correctResult);
  const wrongAnswers = getFourWrongAnswersFromExpression(
    expression,
    correctResult
  );
  const answers = shuffle(wrongAnswers.concat(correctResult));

  return (
    <div className="container">
      <div className="question">
        <h1>Resolva a Expressão:</h1>
        <h2 className="expression">{expression}</h2>
      </div>
      <div>
        {answers.map((answer, index) => {
          const letters = ["a", "b", "c", "d", "e"];
          return (
            <p className="answer" key={answer}>
              <span className="letter">{letters[index]})</span> {answer}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default App;
