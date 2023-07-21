import React from 'react'
import "./SCSS/Project-Summary.scss"

function ProjectSummary() {
  return (
    <div className='project-summary-container'>
      <div className='summary-wrapper'>
        <div className='summary-header'>
          <h3>Project Summary</h3>
          <div className='button-wrapper'>
            <div className='selection'>
              <p>Project</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectSummary