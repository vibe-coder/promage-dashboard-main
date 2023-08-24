import React from 'react'
import "./SCSS/Compnent-Container.scss"
import Header from './Header'
import Overview from './Overview'
import ProjectSummary from './ProjectSummary'
import Task from './Task'
import Sidebar from './Sidebar'
import arrowDown from "../Images/arrow-down.svg"
import { useState } from 'react'

function ComponetsContainer() {

  const [sideBarWidth, setSideBarWidth] = useState(false)

  // let sideBar = document.getElementById("sidebar-wrapper")
  



  return (
    <div className='component-container'>
      <div className='sidebar-component'>
        {sideBarWidth && <div id='sidebar-box' className='sidebar-box'>
          <Sidebar/>
        </div>}
        
        <button onClick={() => setSideBarWidth(!sideBarWidth)} className="reveal-button">
          <img src={arrowDown} alt='arrow down'/>
        </button>
      </div>  


      <div className='other-components'>
        <Header/>
        <Overview/>
        <ProjectSummary/>
        <Task/>
      </div>
    </div>
  )
}

export default ComponetsContainer