import React from "react";

//icons
import { FaDollarSign } from "react-icons/fa";

const Form = () => {
  return (
    <div className="form">
      <div className="label__group">
        <label classname="label" htmlFor="bill">
          Bill
        </label>
        <input type="number" id="bill" />
        <div className="icon" aria-hidden="true">
          <FaDollarSign />
        </div>
      </div>

      <div className="tip__section">
        <p classname="label">Seleted Tip %</p>
        <div className="tip-amount__wrapper">
          <div className="tip__amount">
            <input type="radio" name="tip" value=".15" />
            <div className="tip__btn">15%</div>
          </div>
          <div className="tip__amount">
            <input type="radio" name="tip" value=".20" />
            <div className="tip__btn">20%</div>
          </div>
          <div className="tip__amount">
            <input type="radio" name="tip" value=".25" />
            <div className="tip__btn">25%</div>
          </div>
          <div className="tip__amount">
            <input type="radio" name="tip" value=".30" />
            <div className="tip__btn">30%</div>
          </div>
          <div className="tip__amount">
            <input type="radio" name="tip" value=".5" />
            <div className="tip__btn">50%</div>
          </div>

          <input type="number" className="tip__custom" />
        </div>
      </div>

      <div className="label__group">
        <label htmlFor="diners">Bill</label>
        <input type="number" id="diners" />
      </div>
    </div>
  );
};

export default Form;
