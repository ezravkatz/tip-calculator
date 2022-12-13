import { useState } from "react";

//import images
import logo from "./assets/images/logo1.png";

// style
import "./index.css";

// components
import Display from "./components/display/Display";
import Form from "./components/form/Form";

function App() {
  // const [count, setCount] = useState(0);

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
