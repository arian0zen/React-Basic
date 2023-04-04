import { useEffect, useState } from "react";

const UseCounter = (direction) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (direction === "forward") {
        setCounter((prevCounter) => prevCounter + 1);
      } else if (direction === "backward") {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [direction]);

  return counter;
};

export default UseCounter;
