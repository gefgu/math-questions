import "./styles/fonts.css";
import "./styles/app.css";

import Question from "./components/Question";
import Answers from "./components/Answers";
import generateExpressionAndAnswers from "./modules/expressionGenerator";

function App() {
  const { expression, answers } = generateExpressionAndAnswers();

  return (
    <div className="container">
      <Question
        expression={expression.replaceAll("*", "x").replaceAll("/", "÷")}
      />
      <Answers answers={answers} />
    </div>
  );
}

export default App;
