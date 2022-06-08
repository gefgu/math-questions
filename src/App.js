import "./styles/fonts.css";
import "./styles/app.css";

import Question from "./components/Question";
import { simplifyExpression } from "mathsteps";

function App() {
  // const expression = generateExpression();
  const expression = "6 + 3 * 4 - 8 / 4";

  let steps = simplifyExpression(expression);

  console.log(expression);
  steps = steps.map((step) => step.newNode.toString());
  console.log(steps);

  return (
    <div className="container">
      <Question
        expression={expression.replaceAll("*", "x").replaceAll("/", "÷")}
      />

    </div>
  );
}

// Amend next commit

export default App;
