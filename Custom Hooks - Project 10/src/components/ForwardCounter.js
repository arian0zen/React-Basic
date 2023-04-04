import Card from "./Card";
import UseCounter from "../hooks/useCounter";
const ForwardCounter = () => {
  const counter = UseCounter("forward");
  return <Card>{counter}</Card>;
};

export default ForwardCounter;
