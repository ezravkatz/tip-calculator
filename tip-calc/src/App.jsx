import { useState } from "react";

// style
import "./index.css";

// components
import Display from "./components/display/Display";
import Form from "./components/form/Form";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Form />
        <Display />
      </div>
      <div className="display"></div>
    </div>
  );
}

export default App;
