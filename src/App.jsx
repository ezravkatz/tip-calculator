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
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [diners, setDiners] = useState("");
  const [calculatedTip, setCalculatedTip] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    console.table({ bill, diners, tip });
    if (bill > 0 && diners > 0 && tip > 0) {
      setCalculatedTip(bill * (tip / 100));
      setTotal(calculatedTip + bill);
    }
  }, [bill, diners, tip, calculatedTip]);

  const handleResetBtn = (e) => {
    setBill(0);
    setTip(0);
    setDiners("");
    setCalculatedTip(0);
    setTotal(0);
  };

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
          <Display
            total={total}
            calculatedTip={calculatedTip}
            handleResetBtn={handleResetBtn}
            diners={diners}
          />
        </div>
        <div className="display"></div>
      </div>
    </body>
  );
}

export default App;
