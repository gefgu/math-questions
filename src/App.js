import "./styles/fonts.css";
import "./styles/app.css";

import Question from "./components/Question";
import Answers from "./components/Answers";
import generateExpression from "./modules/expressionGenerator";
import {getAnswersFromExpression} from "./modules/answerGenerator";

function App() {

  // const [expression, answers] = generateExpressionAndAnswers();

  const expression = generateExpression();

  const answers = getAnswersFromExpression(expression);

  return (
    <div className="container">
      <Question
        expression={expression.replaceAll("*", "x").replaceAll("/", "÷")}
      />
      <Answers answers={answers}/>
    </div>
  );
}

export default App;
