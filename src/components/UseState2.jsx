import { useState } from "react";

function UseState2() {
  const [age, setAge] = useState(0);
  const [sib, setSib] = useState(0);

  const increaseAge = () => {
    setAge(age + 1);
  };

  const increaseSiblings = () => {
    setSib(sib + 1);
  };

  return (
    <div>
      <h2>PROGRESSION 2</h2>
      <p>Current age: {age}</p>
      <p>Number of siblings: {sib}</p>

      <button onClick={increaseAge}>Increase age</button>
      <button onClick={increaseSiblings}> Increase siblings</button>
    </div>
  );
}

export default UseState2;
