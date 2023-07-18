import React from "react";
import { useSpring, animated } from "react-spring";

const AnimatedNumber = ({n}) => {
  // Define the start and end values for the animation
  const startValue = 0;
  const endValue = n;

  // Create the animation using the useSpring hook
  const { number } = useSpring({
    from: { number: startValue },
    to: { number: endValue },
    config: { duration: 1000 }, // Adjust the duration as desired
  });

  return  <animated.span className="text-purple">{number.to((val) => Math.floor(val))}</animated.span>;
};

export default AnimatedNumber;
