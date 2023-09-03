import React from 'react'
import "./SCSS/Task.scss"
import arrowRight from "../Images/arrow-right-left.gif"
import arrowDown from "../Images/arrow-down.svg"
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import "./SCSS/Bio-Down-Button.scss"
import Divider from '@mui/material/Divider';
import TaskData from './TodayTaskData';



const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />


))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 9,
    marginTop: theme.spacing(1),
    minWidth: 130,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[400],
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

function Task(prop) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='task-container'>


      <div className="daily-task">
        <div className='caution-wrapper'>
          <img src={arrowRight} alt='caution' />
          <p>Scroll for more info</p>
        </div>

        <h3>Today task</h3>

        {/* Task List */}

        <div className="task-wrapper">
          
          <div className='task-list'>
            <div className="task-switch-wrapper">
              <button><p>All</p><div className='task-count'><p>10</p></div></button>
              <button><p>Important</p><div className='task-count'><p>0</p></div></button>
              <button><p>Notes</p><div className='task-count'><p>05</p></div></button>
              <button><p>Links</p><div className='task-count'><p>10</p></div></button>
            </div>
      
            <div className="task-items-wrapper">
              
              {
                TaskData.map((data) => {
                  return(
                  <div className="task" key={data.id}>
                    <input className='task-checkbox' type='checkbox' />
                    <p className='task-name'>{data.task}</p>
                    <div className='task-status'>{data.status}</div>
                  </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>


      {/* Projects Workload */}

      <div className="project-workload-wrapper">

        <div className='caution-wrapper'>
          <img src={arrowRight} alt='caution' />
          <p>Scroll for more info</p>
        </div>

        {/* Projects Workload Header */}

        <div className="project-workload-header">
          <h3>Projects Workload</h3>

          <>
            <div onClick={handleClick}>
              <p>Last 3 Months</p>
              <img src={arrowDown} alt="Arrow Down Icon"/>
            </div>
          
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                  'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                className="styled-menu"
              >
                <MenuItem onClick={handleClose} disableRipple>
                  <p style={{margin: 0, fontSize: '1rem'}}>Last 1 Month</p>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose} disableRipple>
                  <p style={{margin: 0, fontSize: '1rem'}}>Last 2 Months</p>
                </MenuItem>
            </StyledMenu>
          </>
        </div>

        {/* Projects Worload Body */}

        <div className='project-workload-body'>


          <div className='user'>
            <div className='figure'>1</div>
            <div className='figure'>2</div>
            <div className='figure'>3</div>
            <h4>Sam</h4>
          </div>

          <div className='user'>
            <div className='figure'>1</div>
            <div className='figure'>2</div>
            <div className='figure'>3</div>
            <div className='figure'>4</div>
            <h4>Meldy</h4>
          </div>

          <div className='user'>
            <div className='figure'>1</div>
            <h4>Ken</h4>
          </div>

          <div className='user'>
            <div className='figure'>1</div>
            <div className='figure'>2</div>
            <div className='figure'>3</div>
            <div className='figure'>4</div>
            <div className='figure'>5</div>
            <div className='figure'>6</div>
            <h4>Dmitry</h4>
          </div>

          <div className='user'>
            <div className='figure'>1</div>
            <div className='figure'>2</div>
            <div className='figure'>3</div>
            <div className='figure'>4</div>
            <h4>Vego</h4>
          </div>

          <div className='user'>
            <div className='figure'>1</div>
            <h4>Kadin</h4>
          </div>

          <div className='user'>
            <div className='figure'>1</div>
            <div className='figure'>2</div>
            <h4>Melm</h4>
          </div>

        </div>
      </div>


    </div>
  )
}

export default Task