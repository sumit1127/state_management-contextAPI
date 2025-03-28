import { CounterContext } from "./context_API/CounterContext";
import Counter from "./context_API/Counter";

const App = () => {
  return (
    <>
      <CounterContext>
        <Counter />
      </CounterContext>
    </>
  );
};

export default App;
