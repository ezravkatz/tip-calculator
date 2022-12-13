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
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [diners, setDiners] = useState("");

  useEffect(() => {
    console.table({ bill, diners, tip });
  }, [bill, diners, tip]);

  return (
    <body>
      <div className="wrapper">
        <img src={logo} alt="bill Calc Logo" />
        <div className="container">
          <Form
            bill={bill}
            setBill={setBill}
            tip={tip}
            setTip={setTip}
            diners={diners}
            setDiners={setDiners}
          />
          <Display />
        </div>
        <div className="display"></div>
      </div>
    </body>
  );
}

export default App;
