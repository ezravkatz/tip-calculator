import React from "react";
import "./display.css";

const Display = (calculatedTip, total, diners, handleResetBtn) => {
  const returnCurrencyAmt = (amt) => {
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amt);
  };

  return (
    <div id="display">
      <div className="display__row">
        <div className="display__label">
          <p className="tip__header">Tip Amount</p>
          <p className="unit">/ Person</p>
        </div>

        <p className="display__amt">
          {returnCurrencyAmt(`${calculatedTip ? calculatedTip / diners : "0"}`)}
        </p>
      </div>
      <div className="display__row">
        <div className="display__label">
          <p className="header"> Total</p>
          <p className="unit">/ Person</p>
        </div>

        <p className="display__amt">
          {returnCurrencyAmt(`${total ? total / diners : "0"}`)}
        </p>
      </div>
      {total ? (
        <button className="btn" onClick={handleResetBtn}>
          Reset
        </button>
      ) : (
        <button className="btn" disabled>
          {" "}
          Reset
        </button>
      )}
    </div>
  );
};

export default Display;
