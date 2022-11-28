import React from 'react'

//icons
import {FaDollarSign} from 'react-icons/fa'

const Form = () => {
  return (
    <div className='form'>
      <div className="label__group">
        <label htmlFor="bill">Bill</label>
        <input type="number" id="bill" />
        <div className='icon' aria-hidden="true"><FaDollarSign/>
        </div>
      </div>

      <div className="label__group">
        <label htmlFor="diners">Bill</label>
        <input type="number" id="diners" />
      </div>

    </div>
  )
}

export default Form
