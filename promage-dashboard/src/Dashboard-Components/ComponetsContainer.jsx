import React from 'react'
import "./SCSS/Compnent-Container.scss"
import Header from './Header'
import Overview from './Overview'
import ProjectSummary from './ProjectSummary'
import Task from './Task'

function ComponetsContainer() {
  return (
    <div className='component-container'>
      <Header/>
      <Overview/>
      <ProjectSummary/>
      <Task/>
    </div>
  )
}

export default ComponetsContainer