import { useSelector } from "react-redux";

const CounterData = () => {
  const { counterVal } = useSelector((store) => store.counter);

  return <p className="lead mb-4">Current Counter Value:{counterVal}</p>;
};
export default CounterData;
