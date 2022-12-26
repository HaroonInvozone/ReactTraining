import { useState, useEffect, useRef } from "react";
import { calculateTimeLeft } from "../Common/ulitities";

// All the computation are same as previous, only change is, we directly return the values instead of rendering anything.
const UseCountdown = date => {
  const initialTimeLeft = calculateTimeLeft(date);
  const [timeLeft, setTimeLeft] = useState(initialTimeLeft);
  const timer = useRef();

  useEffect(() => {
    timer.current = setInterval(() => {
      setTimeLeft(calculateTimeLeft(date));
    }, 1000);

    return () => {
      if (timer.current !== undefined) {
        clearInterval(timer.current);
      }
    };
  }, [date]);

  let isValidDate = true,
    isValidFutureDate = true;

  if (timeLeft === null) isValidDate = false;
  if (timeLeft && timeLeft.seconds === undefined) isValidFutureDate = false;

  // We return these computed values for the passed date prop to our hook
  return { isValidDate, isValidFutureDate, timeLeft };
};

export default UseCountdown;    