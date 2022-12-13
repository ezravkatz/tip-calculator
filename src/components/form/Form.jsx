import React from "react";

import "./form.css";

//icons
import { FaDollarSign } from "react-icons/fa";
import { SlPeople } from "react-icons/sl";

const Form = ({ bill, setBill, tip, setTip, diners, setDiners }) => {
  const handleSelectedTip = (e) => {
    setTip(+e.target.value);
  };

  return (
    <div className="form">
      <div className="label__group">
        <div className="label__wrapper">
          <label className="label" htmlFor="bill">
            Bill
          </label>
        </div>
        <div className="error">
          <p>Error </p>
        </div>
        <div className="number__wrapper">
          <input
            type="number"
            className="number__input"
            id="bill"
            onInput={(e) => setBill(+e.target.value)}
          />
          <div className="icon" aria-hidden="true">
            <FaDollarSign />
          </div>
        </div>
      </div>

      <div className="tip__section">
        <p className="label">Seleted Tip %</p>
        <div className="tip-amount__wrapper">
          <div className="tip__amount">
            <input
              type="radio"
              onInput={handleSelectedTip}
              name="tip"
              value="15"
            />
            <label className="tip__btn" htmlFor="input1" id="input1">
              15%
            </label>
          </div>
          <div className="tip__amount">
            <input
              type="radio"
              onInput={handleSelectedTip}
              name="tip"
              value="20"
            />
            <label className="tip__btn" htmlFor="input2" id="input2">
              20%
            </label>
          </div>
          <div className="tip__amount">
            <input
              type="radio"
              onInput={handleSelectedTip}
              name="tip"
              value="25"
            />
            <label className="tip__btn" htmlFor="input3" id="input3">
              25%
            </label>
          </div>
          <div className="tip__amount">
            <input
              type="radio"
              onInput={handleSelectedTip}
              name="tip"
              value="30"
            />
            <label className="tip__btn" htmlFor="input4" id="input4">
              30%
            </label>
          </div>
          <div className="tip__amount">
            <input
              type="radio"
              onInput={handleSelectedTip}
              name="tip"
              value="5"
            />
            <label className="tip__btn" htmlFor="input5" id="input5">
              50%
            </label>
          </div>

          <input type="number" className="tip__custom" />
        </div>
      </div>

      <div className="label__group">
        <div className="label__wrapper">
          <label className="label" htmlFor="diners">
            Number of Diners
          </label>
        </div>
        <div className="error">
          <p>Error</p>
        </div>
        <div className="number__wrapper">
          <input
            type="text"
            className="number__input"
            id="diners"
            onInput={(e) => setDiners(+e.target.value)}
          />
          <div className="icon" aria-hidden="true">
            <SlPeople />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
