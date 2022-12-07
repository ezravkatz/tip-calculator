// import { useState } from "react";

//import images
import logo from "./assets/images/logo3.png";

// style
import "./index.css";

// components
import Display from "./components/display/Display";
import Form from "./components/form/Form";
import { useState } from "react";

function App() {
  const [billAmt, setBillAmt] = useState(0);
  const [showBillAmtError, setShowBillAmtError] = useState(false);
  const [diners, setDiners] = useState(0);
  const [isTipSelected, setIsTipSelected] = useState(false);
  const [selectedTip, setSelectedTip] = useState(0);

  function handleBillAmtInput(e) {
    const input = e.target.value;
    //TO DO fix regex pattern
    const pattern = /^[0-9]+(\.[0-9][0-9])?$/;
    setBillAmt(input);
    if (pattern.test(input)) {
      setShowBillAmtError(false);
    } else {
      setShowBillAmtError(true);
    }
  }

  function handleSelectedTip(e) {
    console.log(e.target.value);
  }

  return (
    <body>
      <div className="wrapper">
        <img src={logo} alt="Tip Calc Logo" />
        <div className="container">
          <Form
            billAmt={billAmt}
            handleBillAmtInput={handleBillAmtInput}
            handleSelectedTip={handleSelectedTip}
            showBillAmtError={showBillAmtError}
            setShowBillAmtError={setShowBillAmtError}
          />
          <Display />
        </div>
        <div className="display"></div>
      </div>
    </body>
  );
}

export default App;
