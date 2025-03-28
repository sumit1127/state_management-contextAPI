import { useContext } from "react";
import CounterContext from "./context_API/CounterContext";

const Counter = () => {
  const { count, add, minus } = useContext(CounterContext);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={add}>Increase</button>
      <button onClick={minus}>Decrease</button>
    </div>
  );
};

export default Counter;
