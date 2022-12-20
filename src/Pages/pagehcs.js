import React from "react";
import SecondCountdownUI from "./second-countdown-ui";
import useCountdown from "./use-countdown"; // importing the custom hook

const PageHC2 = () => {
  const date = new Date("2021-01-01"); // New year!
  // pass in the date and get all the values from the hook, throw it to the UI
  const { timeLeft, isValidDate, isValidFutureDate } = useCountdown(date);

  return (
    <SecondCountdownUI
      timeLeft={timeLeft}
      isValidDate={isValidDate}
      isValidFutureDate={isValidFutureDate}
    />
  );
};

export default PageHC2;
