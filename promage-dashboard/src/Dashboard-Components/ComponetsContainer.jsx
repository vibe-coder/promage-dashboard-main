import React from 'react'
import "./SCSS/Compnent-Container.scss"
import Header from './Header'
import Overview from './Overview'
import ProjectSummary from './ProjectSummary'
import Task from './Task'
import Sidebar from './Sidebar'

function ComponetsContainer() {
  return (
    <div className='component-container'>
      <div className='sidebar-wrapper'>
        <Sidebar/>
      </div>

      <div className='other-components'>
        <Header/>
        {/* <Overview/>
        <ProjectSummary/>
        <Task/> */}
        hey
      </div>
    </div>
  )
}

export default ComponetsContainer