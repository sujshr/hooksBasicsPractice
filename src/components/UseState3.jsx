import { useState } from "react";

function ObjectState() {
  const [state, setState] = useState({ age: 0, sib: 0 });

  const increaseAge = () => {
    setState({
      ...state,
      age: age + 1,
    });
  };

  const increaseSiblings = () => {
    setState({
      ...state,
      sib: sib + 1,
    });
  };

  const { age, sib } = state;

  return (
    <div>
      <h2>PROGRESSION 3</h2>
      <p>Current age: {age}</p>
      <p>Number of siblings: {sib}</p>
      <button
        onClick={() => {
          increaseAge();
        }}
      >
        Increase age
      </button>
      <button
        onClick={() => {
          increaseSiblings();
        }}
      >
        Increase sib
      </button>
    </div>
  );
}

export default ObjectState;
