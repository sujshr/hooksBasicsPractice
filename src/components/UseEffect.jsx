import { useState, useEffect } from "react";

function UseEffect() {
  const [age, setAge] = useState(0);
  const [sib, setSib] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(!isVisible);
  }, [age, sib]);

  return (
    <div>
      <h2>PROGRESSION 5</h2>
      <p>Current age: {age}</p>
      <p>Number of siblings: {sib}</p>

      <button onClick={() => setAge((currAge) => currAge + 1)}>age</button>
      <button onClick={() => setSib((currSib) => currSib + 1)}>sib</button>
      {isVisible && <p>Visibility of This paragraph is a sideEffect :)</p>}
    </div>
  );
}

export default UseEffect;
