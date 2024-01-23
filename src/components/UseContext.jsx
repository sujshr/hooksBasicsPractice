import { useContext } from "react";
import { ToggleTheme } from "../App2";

function UseContext() {
  const darkTheme = useContext(ToggleTheme);
  const themeStyle = {
    backgroundColor: darkTheme ? "black" : "white",
    color: darkTheme ? "white" : "black",
    padding: "2rem",
    borderRadius: "5px",
    textAlign: "center",
  };

  return <div style={themeStyle}>Testing UseContext</div>;
}

export default UseContext;
