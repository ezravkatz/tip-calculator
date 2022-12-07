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
  const [billAmt, setBillAmt] = useState("");
  const [showBillAmtError, setShowBillAmtError] = useState(false);
  const [diners, setDiners] = useState("");
  const [tip, setTip] = useState("");
  const [isTipSelected, setIsTipSelected] = useState(false);
  const [selectedTip, setSelectedTip] = useState(0);
  const [showDinersError, setShowDinersError] = useState(false);
  const [calculatedTip, setCalculatedTip] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    console.log({ billAmt, diners, tip });
    if (billAmt > 0 && diners > 0 && tip > 0) {
      setCalculatedTip((billAmt * (tip / 100)) / diners);
      setTotal(calculatedTip + billAmt);
    }
  }, [billAmt, diners, tip]);

  const handleResetBtn = (e) => {
    console.log("reseted");
  };

  // function calculateTip() {
  //   setTipPerDiner((billAmt * selectedTip) / diners);
  //   console.log(tipPerDiner);
  // }

  // function handleBillAmtInput(e) {
  //   const input = e.target.value;
  //   //   //TO DO fix regex pattern
  //   //   // const pattern = /^[0-9]+(\.[0-9][0-9])?$/;
  //   setBillAmt(input);
  //   //   calculateTip();
  //   //   if (pattern.test(input)) {
  //   //     setShowBillAmtError(false);
  //   //   } else {
  //   //     setShowBillAmtError(true);
  //   //   }
  // }

  const handleSelectedTip = (e) => {
    setTip(+e.target.value);
  };

  // function handleDinersInput(e) {
  //   const input = e.target.value;
  //   // const pattern = /^[0-9]*$/;
  //   setDiners(input);
  //   // if (pattern.test(input)) {
  //   //   setShowDinersError(false);
  //   // } else {
  //   //   setShowDinersError(true);
  //   // }
  // }

  return (
    <body>
      <div className="wrapper">
        <img src={logo} alt="Tip Calc Logo" />
        <div className="container">
          <Form
            billAmt={billAmt}
            // handleBillAmtInput={handleBillAmtInput}
            handleSelectedTip={handleSelectedTip}
            showBillAmtError={showBillAmtError}
            selectedTip={selectedTip}
            // handleDinersInput={handleDinersInput}
            diners={diners}
            showDinersError={showDinersError}
            tip={tip}
            setTip={setTip}
          />
          <Display
            calculatedTip={calculatedTip}
            total={total}
            handleResetBtn={handleResetBtn}
          />
        </div>
        <div className="display"></div>
      </div>
    </body>
  );
}

export default App;
