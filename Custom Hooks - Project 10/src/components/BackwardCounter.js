import Card from "./Card";
import UseCounter from "../hooks/useCounter";
const BackwardCounter = () => {
  const counter = UseCounter("backward");
  return <Card>{counter}</Card>;
};

export default BackwardCounter;
