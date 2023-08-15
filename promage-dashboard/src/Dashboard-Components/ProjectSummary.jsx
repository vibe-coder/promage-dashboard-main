import React from 'react'
import "./SCSS/Project-Summary.scss"
import arrowDown from "../Images/arrow-down.svg"
import arrowRight from "../Images/arrow-right-left.gif"
import progressMeasure from "../Images/progress-measure.svg"

function ProjectSummary() {
  return (
    
    <div className='project-summary-container'>

      {/* Project Summary */}

      <div className='summary-wrapper'>
        {/* Caution Header */}

        <div className='caution-wrapper'>
          <img src={arrowRight} alt='caution' />
          <p>Scroll right for more info</p>
        </div>

        {/* Project Summary Selection */}

        <div className='scroll-x'>

          <div className='summary-header'>
            <div className='title-wrapper'><h3>Project Summary</h3></div>
            
            <div className='button-wrapper'>  
              <div className='selection'>
                <p>Project</p>
                <img src={arrowDown} alt="Arrow Down Icon"/>
              </div>

              <div className='selection'>
                <p>Project Manager</p>
                <img src={arrowDown} alt="Arrow Down Icon"/>
              </div>

              <div className='selection'>
                <p>Status</p>
                <img src={arrowDown} alt="Arrow Down Icon"/>
              </div>
            </div>
          </div>

          {/* Project Summary Body */}

          <div className='summary-body'>

            <table className='table'>
              <thead className='table-header-wrapper'>
                <tr className='header'>
                  <th className='header-item'><p>Name</p></th>
                  <th className='header-item'><p>Project Manager</p></th>
                  <th className='header-item'><p>Due date</p></th>
                  <th className='header-item'><p>Status</p></th>
                  <th className='header-item'><p>Progress</p></th>
                </tr>
              </thead>

              <tbody className='table-body-wrapper'>
                <tr className='row-body'>
                  <td className='body-item'><p>Nelsa Web Development</p></td>
                  <td className='body-item'><p>Om prakash sao</p></td>
                  <td className='body-item'><p>May 25, 2023</p></td>
                  <td className='body-item'><div className='status-bar'><p>Completed</p></div></td>
                  <td className='body-item'><div className='progress-wrapper'><p>100%</p></div></td>
                </tr>

                <tr className='row-body'>
                  <td className='body-item'><p>Nelsa Web Development</p></td>
                  <td className='body-item'><p>Om prakash sao</p></td>
                  <td className='body-item'><p>May 25, 2023</p></td>
                  <td className='body-item'><div className='status-bar'><p>Completed</p></div></td>
                  <td className='body-item'><div className='progress-wrapper'><p>100%</p></div></td>
                </tr>

                <tr className='row-body'>
                  <td className='body-item'><p>Nelsa Web Development</p></td>
                  <td className='body-item'><p>Om prakash sao</p></td>
                  <td className='body-item'><p>May 25, 2023</p></td>
                  <td className='body-item'><div className='status-bar'><p>Completed</p></div></td>
                  <td className='body-item'><div className='progress-wrapper'><p>100%</p></div></td>
                </tr>

                <tr className='row-body'>
                  <td className='body-item'><p>Nelsa Web Development</p></td>
                  <td className='body-item'><p>Om prakash sao</p></td>
                  <td className='body-item'><p>May 25, 2023</p></td>
                  <td className='body-item'><div className='status-bar'><p>Completed</p></div></td>
                  <td className='body-item'><div className='progress-wrapper'><p>100%</p></div></td>
                </tr>

                <tr className='row-body'>
                  <td className='body-item'><p>Nelsa Web Development</p></td>
                  <td className='body-item'><p>Om prakash sao</p></td>
                  <td className='body-item'><p>May 25, 2023</p></td>
                  <td className='body-item'><div className='status-bar'><p>Completed</p></div></td>
                  <td className='body-item'><div className='progress-wrapper'><p>100%</p></div></td>
                </tr>

              </tbody> 
            </table>
          </div>
        </div>
      </div>



      {/* Overall Progress */}

      <div className='overall-progress-container'>

        {/* Top */}
        <div className='top'>
          <h3>Overall Progress</h3>
          <div>
            <p>All</p>
            <img src={arrowDown} alt='arrow down' />
          </div>
        </div>

        {/* Middle */}
        <div className='middle'>
          <img src={progressMeasure} alt='progress measure' />
        </div>

        {/* Bottom */}
        <div className='bottom'>
          <div>
            <h3>95</h3>
            <p>Total Projects</p>
          </div>

          <div>
            <h3>26</h3>
            <p>Completed</p>
          </div>

          <div>
            <h3>35</h3>
            <p>Delayed</p>
          </div>

          <div>
            <h3>35</h3>
            <p>On going</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectSummary