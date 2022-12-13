// import { useState } from "react";

//import images
import logo from "./assets/images/logo3.png";

// style
import "./index.css";

// components
import Display from "./components/display/Display";
import Form from "./components/form/Form";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  return (
    <body>
      <div className="wrapper">
        <img src={logo} alt="Tip Calc Logo" />
        <div className="container">
          <Form />
          <Display />
        </div>
        <div className="display"></div>
      </div>
    </body>
  );
}

export default App;
