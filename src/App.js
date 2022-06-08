import "./styles/fonts.css";
import "./styles/app.css";

import Question from "./components/Question";
import { simplifyExpression } from "mathsteps";
import ResolutionStep from "./components/ResolutionStep";
import generateExpression from "./modules/expressionGenerator";

function App() {
  const expression = generateExpression();

  let steps = simplifyExpression(expression);

  console.log(expression);
  steps = steps.map((step) => step.newNode.toString());
  steps.unshift(expression);
  console.log(steps);

  return (
    <div className="container">
      <Question
        expression={expression.replaceAll("*", "x").replaceAll("/", "÷")}
      />
      <div className="resolution">
        {steps.map((step, index) => {
          return (
            <ResolutionStep
              step={step}
              delay={index * 2000}
              isResult={index === steps.length - 1}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
