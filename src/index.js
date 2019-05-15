import React from "react";
import ReactDOM from "react-dom";
import Grid from "./Components/Grid";

import "./styles.css";

function App() {
  return (
    <div>
      <Grid />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
