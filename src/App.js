import "./styles/fonts.css";
import "./styles/app.css";

import generateExpression from "./modules/expressionGenerator";
import {
  getFourWrongAnswersFromExpression,
  solveExpression,
} from "./modules/expressionSolver";
import shuffle from "./modules/shuffleArray";
import Question from "./components/Question";
import { evaluate } from "mathjs";
import { solveEquation, simplifyExpression } from "mathsteps";

function App() {
  const expression = generateExpression();
  const correctResult = evaluate(expression);
  // console.log(correctResult);
  // console.log(evaluate(expression.replace("x", "*").replace("÷", "/")));

  const steps = simplifyExpression();
  console.log(steps);

  // console.log(steps[0].newEquation.ascii());

  console.log(expression);
  steps.forEach((step) => {
    console.log(step.newNode.toString()); // after change: 6 x
  });

  const wrongAnswers = getFourWrongAnswersFromExpression(
    expression,
    correctResult
  );
  const answers = shuffle(wrongAnswers.concat(correctResult));

  return (
    <div className="container">
      <Question expression={expression.replaceAll("*", "x").replaceAll("/", "÷")} />
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

// Amend next commit

export default App;
