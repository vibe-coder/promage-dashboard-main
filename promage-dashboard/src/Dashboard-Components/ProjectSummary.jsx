import React from 'react'
import "./SCSS/Project-Summary.scss"
import arrowDown from "../Images/arrow-down.svg"
import caution from "../Images/caution.gif"
import arrowRight from "../Images/arrow-right-left.gif"

function ProjectSummary() {
  return (
    <div className='project-summary-container'>

      <div className='summary-wrapper'>

        {/* Caution Header */}

        <div className='caution-wrapper'>
          <img src={arrowRight} alt='caution' />
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
                <tr className='body'>
                  <td className='body-item'>Nelsa Web Development</td>
                  <td className='body-item'>Om prakash sao</td>
                  <td className='body-item'>May 25, 2023</td>
                  <td className='body-item'>Completed</td>
                  <td className='body-item'>100%</td>
                </tr>
              </tbody>
              
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectSummary