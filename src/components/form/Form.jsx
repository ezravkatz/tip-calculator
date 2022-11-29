import React from "react";

import "./form.css";

//icons
import { FaDollarSign } from "react-icons/fa";
import { SlPeople } from "react-icons/sl";

const Form = () => {
  return (
    <div className="form">
      <div className="label__group">
        <div className="label__wrapper">
          <label classname="label" htmlFor="bill">
            Bill
          </label>
        </div>
        <p classname="error"></p>
        <div className="number__wrapper">
          <input type="text" classname="number__input" id="bill" />
          <div className="icon" aria-hidden="true">
            <FaDollarSign />
          </div>
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
        <div className="label__wrapper">
          <label classname="label" htmlFor="diners">
            Number of Diners
          </label>
        </div>
        <p classname="error"></p>
        <div className="number__wrapper">
          <input type="text" classname="number__input" id="diners" />
          <div className="icon" aria-hidden="true">
            <SlPeople />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
