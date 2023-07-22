import React from 'react'
import "./SCSS/Project-Summary.scss"
import arrowDown from "../Images/arrow-down.svg"
import caution from "../Images/caution.gif"

function ProjectSummary() {
  return (
    <div className='project-summary-container'>

      <div className='summary-wrapper'>

        {/* Caution Header */}

        <div className='caution-wrapper'>
          <img src={caution} alt='caution' />
          <p>Scroll right for more info.</p>
        </div>


        {/* Scroll Side-ways */}

        <div className='scroll-x'>

          <div className='summary-header'>
            <div className='title-wrapper'><h3>Project Summary</h3></div>
            <div className='button-wrapper'>
              <div className='selection'>
                <p>Project</p>
                <img src={arrowDown} alt="Arrow Down Icon"/>
              </div>

              <div className='selection'>
                <p>Project</p>
                <img src={arrowDown} alt="Arrow Down Icon"/>
              </div>

              <div className='selection'>
                <p>Project</p>
                <img src={arrowDown} alt="Arrow Down Icon"/>
              </div>
            </div>
          </div>



          {/* Project Summary Body */}

          <div className='summary-body'>
            <table>
              <tr className='header'>
              <th>Name</th>
              <th>Project Manager</th>
              <th>Due date</th>
              <th>Status</th>
              <th>Progress</th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectSummary