import React from "react";
import { useState } from "react";
import UseState from "./components/UseState";
import UseState2 from "./components/UseState2";
import ObjectState from "./components/UseState3";
import UseState4 from "./components/UseState4";
import UseEffect from "./components/UseEffect";

export const ToggleTheme = React.createContext();
function App() {
  return (
    <>
      <UseState />
      <br />
      <br />
      <UseState2 />
      <br />
      <br />
      <ObjectState />
      <br />
      <br />
      <UseState4 />
      <br />
      <br />
      <UseEffect />
      <br />
      <br />
    </>
  );
}

export default App;
