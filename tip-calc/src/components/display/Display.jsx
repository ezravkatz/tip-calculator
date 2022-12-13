import React from "react";
import styles from "./display.css";

const Display = () => {
  return (
    <body>
      <div className="display">
        <div className="display__group">
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
        </div>

        <button className="btn" disabled>
          Reset
        </button>
      </div>
    </body>
  );
};

export default Display;
