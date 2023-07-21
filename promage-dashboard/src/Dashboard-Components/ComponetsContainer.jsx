import React from 'react'
import "./SCSS/Compnent-Container.scss"
import Header from './Header'
import Overview from './Overview'
import ProjectSummary from './ProjectSummary'

function ComponetsContainer() {
  return (
    <div className='component-container'>
      <Header/>
      <Overview/>
      <ProjectSummary/>
    </div>
  )
}

export default ComponetsContainer