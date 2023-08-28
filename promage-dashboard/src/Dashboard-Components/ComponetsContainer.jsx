import React from 'react'
import "./SCSS/Compnent-Container.scss"
import Header from './Header'
import Overview from './Overview'
import ProjectSummary from './ProjectSummary'
import Task from './Task'
import Sidebar from './Sidebar'
import arrowDown from "../Images/arrow-down.svg"
import { useState } from 'react'
import { useCollapse } from 'react-collapsed'

function ComponetsContainer() {

  // const [sideBarWidth, setSideBarWidth] = useState(false)

  // let sideBar = document.getElementById("sidebar-wrapper")

  const [isExpanded, setExpanded] = useState(false)
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })
  



  return (
    <div className='component-container'>

      <div className='sidebar-component'>

      <section className='sidebar-box' {...getCollapseProps()}>
          <Sidebar/>
        </section>
        
        <button     {...getToggleProps({
            onClick: () => setExpanded((prevExpanded) => !prevExpanded),
          })}  className='reveal-button'>
          {isExpanded ? '<' : '>'}
        </button>


      </div>
      
      {/* <div className='sidebar-component'>
       <div className='sidebar-box'>
          <Sidebar/>
        </div>
        
        <button className="reveal-button">
          <img src={arrowDown} alt='arrow down'/>
        </button>
      </div>   */}


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