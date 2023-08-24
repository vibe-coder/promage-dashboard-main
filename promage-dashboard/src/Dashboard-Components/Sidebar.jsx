import React from 'react'
import "./SCSS/Sidebar.scss"
import promageLogo from "../Images/promage-logo.svg"
import plusIcon from "../Images/plus-icon.svg"
import dashboardIcon from "../Images/dashboard-icon.svg"
import projectIcon from "../Images/project-icon.svg"
import taskIcon from "../Images/tasks-icon.svg"
import dashboardIcon2 from "../Images/dashboard-icon-2.svg"
import timeIcon2 from "../Images/new-time-icon.svg"
import resourceIcon from "../Images/resource-icon.svg"
import usersIcon from "../Images/users-icon.svg"
import templateIcon from "../Images/template-icon.svg"
import settingIcon from "../Images/settings-icon.svg"
import helpIcon from "../Images/help-icon.svg"
// import arrowDown from "../Images/arrow-down.svg"



function Sidebar() {
  return (
    <div className='sidebar-container'> 
      <div className='sidebar-wrapper'>
        <div className="logo-wrapper">
          <img src={promageLogo} alt='promage logo' />
        </div>

        <div className="new-project-button">
          <img src={plusIcon} alt='plus icon' />
          <p>Create new project</p>
        </div>

        {/* Menu Wrapper */}

        <div className="menu-wrapper">
          <div className="dashboard-button">
            <img src={dashboardIcon} alt='plus icon' />
            <p>Dashboard</p>
          </div>

          <div className='menu-item'>
            <img src={projectIcon} alt="menu-icon" />
            <p>Projects</p>
          </div>

          <div className='menu-item'>
            <img src={taskIcon} alt="menu-icon" />
            <p>Tasks</p>
          </div>

          <div className='menu-item'>
            <img src={dashboardIcon2} alt="menu-icon" />
            <p>Dashboard</p>
          </div>

          <div className='menu-item'>
            <img src={timeIcon2} alt="menu-icon" />
            <p>Time log</p>
          </div>

          <div className='menu-item'>
            <img src={resourceIcon} alt="menu-icon" />
            <p>Resource mgnt</p>
          </div>

          <div className='menu-item'>
            <img src={usersIcon} alt="menu-icon" />
            <p>Users</p>
          </div>

          <div className='menu-item'>
            <img src={templateIcon} alt="menu-icon" />
            <p>Project template</p>
          </div>

          <div className='menu-item'>
            <img src={settingIcon} alt="menu-icon" />
            <p>Menu Setting</p>
          </div>
        </div>

        {/* Help Button */}

        <div className="help-button">
          <img src={helpIcon} alt="help icon" />
        </div>
      </div>
    </div>
  )
}

export default Sidebar