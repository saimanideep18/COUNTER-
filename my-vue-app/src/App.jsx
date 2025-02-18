import React, { useReducer } from "react";

const initialState = {
  count: 0
};

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + action.payload };
    case 'DECREMENT':
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function increment() {
    dispatch({ type: 'INCREMENT', payload: 1 });
  }
  function decrement() {
    dispatch({ type: 'DECREMENT', payload: 1 });
  }

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default App;