import React from 'react'
import "./SCSS/Overview.scss"
import overviewIcon from "../Images/overview-icon.svg"
import increaseIcon from "../Images/increase-icon.svg"

function Overview() {
  return (
    <div className='overview-container'>
      <div className='income-icon'>
        <img src={overviewIcon} alt='overview-icon' />
      </div>
      <div className='income-figure'>
        <p>Total Revenue</p>
        <h1>$53,00989</h1>
        <div className='increase-wrapper'>
          <img src={increaseIcon} alt='increase-icon' />
          <p>12% increase from last month</p>
        </div>
      </div>
    </div>
  )
}

export default Overview