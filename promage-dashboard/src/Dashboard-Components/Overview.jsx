import React from 'react'
import "./SCSS/Overview.scss"
import overviewIcon from "../Images/overview-icon.svg"
import increaseIcon from "../Images/increase-icon.svg"
import decreaseIcon from "../Images/decrease-icon.svg"
import projectsIcon from "../Images/projects-icon.svg"
import timeIcon from "../Images/time-icon.svg"
import resourcesIcon from "../Images/resources-icon.svg"
import arrowDown from "../Images/arrow-down.svg"

function Overview() {
  return (

    <div className='overview-container'>

      {/* Overview Header */}

      <div className='overview-header'>
        <h3>Overview</h3>
        <div className='date'>
          <p>Last 30 days</p>
          <img src={arrowDown} alt='arrow down'/>
        </div>
      </div>

      {/* Section Container */}

      <div className='section-container'>
        {/* Revenue Container */}

        <div className='container'>
          <div className='icon-1'>
            <img src={overviewIcon} alt='overview-icon' />
          </div>
          <div className='figure-wrapper'>
            <p >Total Revenue</p>
            <h1>$53,00989</h1>
            <div className='description-wrapper'>
              <img src={increaseIcon} alt='increase-icon' />
              <p>12% increase from last month</p>
            </div>
          </div>
        </div>


        {/* Projects Container */}

        <div className='container'>
          <div className='icon-1'>
            <img src={projectsIcon} alt='overview-icon' />
          </div>
          <div className='figure-wrapper'>
            <p>Projects</p>
            <h1>95<span className='calculate'>/100</span></h1>
            <div className='description-wrapper'>
              <img src={decreaseIcon} alt='increase-icon' />
              <p>10% decrease from last month</p>
            </div>
          </div>
        </div>


        {/* Time Section */}


        <div className='container'>
          <div className='icon-1'>
            <img src={timeIcon} alt='overview-icon' />
          </div>
          <div className='figure-wrapper'>
            <p>Time Spent</p>
            <h1>1022<span className='calculate'>/1300 Hrs</span></h1>
            <div className='description-wrapper'>
              <img src={increaseIcon} alt='increase-icon' />
              <p>8% increase from last month</p>
            </div>
          </div>
        </div>


        {/* Resorces Section */}


        <div className='container'>
          <div className='icon-1'>
            <img src={resourcesIcon} alt='overview-icon' />
          </div>
          <div className='figure-wrapper'>
            <p>Resources</p>
            <h1>101<span className='calculate'>/120</span></h1>
            <div className='description-wrapper'>
              <img src={increaseIcon} alt='increase-icon' />
              <p>2% increase from last month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview