import React from 'react'
import "./SCSS/Compnent-Container.scss"
import Header from './Header'
import Overview from './Overview'
import ProjectSummary from './ProjectSummary'
import Task from './Task'
import Sidebar from './Sidebar'
import arrowLeft from "../Images/icon-left.png"
import arrowRight from "../Images/icon-right.png"
import { useState } from 'react'
import Switch from '@mui/material/Switch';
import Collapse from '@mui/material/Collapse';

function ComponetsContainer() {


  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  

  return (
    <div className='component-container'>
      <div className='sidebar-component'>
        <div className='sidebar-box'>
          <Collapse orientation="horizontal" in={checked}>
            <Sidebar/>
          </Collapse>
        </div>
      
        <button className="reveal-button" onClick={() => setChecked(!checked)}   control={<Switch checked={checked} onChange={handleChange} />}>
          {checked ? <img src={arrowLeft} alt='arrow-left' /> : <img src={arrowRight} alt='arrow-right' />}
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