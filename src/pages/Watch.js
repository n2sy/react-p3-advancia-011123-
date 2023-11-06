import React, { useReducer } from "react";

function Watch() {
  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: ++state.count };
      case "decrement":
        return { count: --state.count };
      default:
        throw new Error("Reducer error");
    }
  }
  const initState = {
    count: 0,
  };
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <div>
      <p> {state.count} </p>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
        className="btn btn-primary"
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
        className="btn btn-danger"
      >
        Decrement
      </button>
    </div>
  );
}

export default Watch;
