import "./styles/fonts.css";
import "./styles/app.css";

import Question from "./components/Question";
import { simplifyExpression } from "mathsteps";
import ResolutionStep from "./components/ResolutionStep";
import generateExpression from "./modules/expressionGenerator";
import anime from "animejs/lib/anime.es";
import { useEffect, useRef } from "react";

function App() {
  const expression = generateExpression();

  let steps = simplifyExpression(expression);

  steps = steps.map((step) => step.newNode.toString());
  steps.unshift(expression);

  const containerRef = useRef(null);

  const animateBlocks = () => {
    anime({
      targets: ".block",
      translateX: () => anime.random(0, 500),
      translateY: () => anime.random(0, containerRef.current.clientHeight),
      scale: () => anime.random(1, 4),
      easing: "linear",
      duration: 2000,
      delay: anime.stagger(10),
      complete: animateBlocks,
    });
  };

  useEffect(() => {
    animateBlocks();
  }, []);

  const startingBlockStyle = () => {
    return {
      transform: `translateX(${Math.floor(
        Math.random() * 499
      )}px) translateY(${Math.floor(Math.random() * 200)}px) scale(${Math.floor(
        Math.random() * 4
      )})`,
    };
  };

  console.log(startingBlockStyle());

  return (
    <div className="container" ref={containerRef}>
      {[...Array(100).keys()].map((value) => {
        return (
          <div
            className="block"
            key={value * 10 + 1}
            style={startingBlockStyle()}
          ></div>
        );
      })}
      <Question
        expression={expression.replaceAll("*", "x").replaceAll("/", "÷")}
      />
      <div className="resolution">
        {steps.map((step, index) => {
          return (
            <ResolutionStep
              step={step}
              delay={(index + 1) * 2000}
              isResult={index === steps.length - 1}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
