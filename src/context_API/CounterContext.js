import { createContext, useState } from "react";

const CounterContext = createContext();

export const useCounter = ({ children }) => {
  const [count, setCount] = useState(0);

  function add() {
    setCount(count + 1);
  }

  function minus() {
    setCount(count - 1);
  }

  const contextValue = {
    count,
    add,
    minus,
  };

  return (
    <>
      <CounterContext.Provider value={contextValue}>
        {children}
      </CounterContext.Provider>
    </>
  );
};

export default CounterContext;
