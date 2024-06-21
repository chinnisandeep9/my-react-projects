import { useSelector } from "react-redux";

const CounterData = () => {
  const counter = useSelector((store) => store.counter);
  return <p className="lead mb-4">Current Counter Value:{counter}</p>;
};
export default CounterData;
