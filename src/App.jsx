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
  const [billAmt, setBillAmt] = useState("");
  const [showBillAmtError, setShowBillAmtError] = useState(false);
  const [diners, setDiners] = useState("");
  const [isTipSelected, setIsTipSelected] = useState(false);
  const [selectedTip, setSelectedTip] = useState(0);
  const [showDinersError, setShowDinersError] = useState(false);

  function handleBillAmtInput(e) {
    const input = e.target.value;
    //TO DO fix regex pattern
    // const pattern = /^[0-9]+(\.[0-9][0-9])?$/;
    setBillAmt(input);
    //   if (pattern.test(input)) {
    //     setShowBillAmtError(false);
    //   } else {
    //     setShowBillAmtError(true);
    //   }
  }

  function handleSelectedTip(e) {
    setSelectedTip(e.target.value);
  }

  function handleDinersInput(e) {
    const input = e.target.value;
    const pattern = /^[0-9]*$/;
    setDiners(input);
    if (pattern.test(input)) {
      setShowDinersError(false);
    } else {
      setShowDinersError(true);
    }
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
            selectedTip={selectedTip}
            handleDinersInput={handleDinersInput}
            diners={diners}
            showDinersError={showDinersError}
          />
          <Display />
        </div>
        <div className="display"></div>
      </div>
    </body>
  );
}

export default App;
