import React from "react";
import { useState } from "react";
import UseContext from "./components/UseContext";

export const ToggleTheme = React.createContext();

function App2() {
  const [darkTheme, setTheme] = useState(true);

  return (
    <>
      <h2>PROGRESSION 6</h2>
      {/* Use a function for onClick */}
      <button onClick={() => setTheme((prevTheme) => !prevTheme)}>
        Toggle
      </button>
      <ToggleTheme.Provider value={darkTheme}>
        <UseContext />
      </ToggleTheme.Provider>
    </>
  );
}

export default App2;
