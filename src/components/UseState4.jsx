import { useState } from "react";

function UseState4() {
  const [age, setAge] = useState(0);
  const [sib, setSib] = useState(0);

  return (
    <div>
      <h2>PROGRESSION 4</h2>
      <p>Current age: {age}</p>
      <p>Number of siblings: {sib}</p>

      <button onClick={() => setAge((currAge) => currAge + 1)}>Increase age</button>
      <button onClick={() => setSib((currSib) => currSib + 1)}>Increase sib</button>
    </div>
  );
}

export default UseState4;
