import React from 'react'
import styles from './display.css'

const Display = () => {
  return (
    <div>
      <div className="display__row">
        <div>
        <div className="display__label">
          <p className='tip__header'>Tip Amount</p>
          <p className='unit'> Person</p>
        </div>
        <div className="display__amt">
          <p className='tip__value'>$0.00</p>
        </div>
      </div>
      <button className='btn'>Reset</button>
      </div>
    </div>
  )
}

export default Display
