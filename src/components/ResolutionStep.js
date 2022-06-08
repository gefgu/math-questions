import { useSpring, animated } from "react-spring";

const ResolutionStep = ({ step, delay }) => {
  step = step.replaceAll("*", "x").replaceAll("/", "÷").replaceAll("+ -", "- ");
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: delay,
  });
  return <animated.p style={props}>{step}</animated.p>;
};

export default ResolutionStep;
