import { useState } from "react";

function UseState() {
  const [age, setAge] = useState(0);

  const handleAge = () => {
    setAge(age + 1);
  };

  return (
    <div>
      <h2>PROGRESSION 1</h2>
      <p>Current age: {age}</p>
      <button onClick={handleAge}>Get Older</button>
    </div>
  );
}

export default UseState;
