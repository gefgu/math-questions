import { useSpring, animated } from "react-spring";

const ResolutionStep = ({ step, delay, isResult }) => {
  step = step.replaceAll("*", "x").replaceAll("/", "÷").replaceAll("+ -", "- ");
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: delay,
  });
  return (
    <animated.p style={props} className={`answer ${isResult ? "result" : ""}`}>
      {step}
    </animated.p>
  );
};

export default ResolutionStep;
