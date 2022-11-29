import React from "react";
import "./display.css";

const Display = () => {
  return (
    <div id="display">
      <div className="display__row">
        <div className="display__label">
          <p className="tip__header">Tip Amount</p>
          <p className="unit">/ Person</p>
        </div>

        <p className="display__amt">$0.00</p>
      </div>
      <div className="display__row">
        <div className="display__label">
          <p className="header"> Total</p>
          <p className="unit">/ Person</p>
        </div>

        <p className="display__amt">$0.00</p>
      </div>

      <button className="btn" disabled>
        Reset
      </button>
    </div>
  );
};

export default Display;
