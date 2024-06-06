// components/Counter.js
import React from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../../mobx/index";

const Counter = observer(() => {
  const { counterStore } = useStores();

  return (
    <div>
      <h1>{counterStore.count}</h1>
      <button onClick={() => counterStore.increment()}>Increment</button>
      <button onClick={() => counterStore.decrement()}>Decrement</button>
    </div>
  );
});

export default Counter;
