import React from 'react'
import "./SCSS/Project-Summary.scss"
import arrowDown from "../Images/arrow-down.svg"
import arrowRight from "../Images/arrow-right-left.gif"
import progressMeasure from "../Images/progress-measure.svg"
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import "./SCSS/Bio-Down-Button.scss"
import Divider from '@mui/material/Divider';
import SummaryData from './ProjectSummaryData'


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

function ProjectSummary(prop) {


  // Dropdown 1
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

   // Dropdown 2
   const [anchorEl2, setAnchorEl2] = React.useState(null);
   const open2 = Boolean(anchorEl2);
   const handleClick2 = (event) => {
     setAnchorEl2(event.currentTarget);
   };
   const handleClose2 = () => {
     setAnchorEl2(null);
   };
       
   // Dropdown 3
    const [anchorEl3, setAnchorEl3] = React.useState(null);
    const open3 = Boolean(anchorEl3);
    const handleClick3 = (event) => {
      setAnchorEl3(event.currentTarget);
    };
    const handleClose3 = () => {
      setAnchorEl3(null);
    };

       // Dropdown 4
       const [anchorEl4, setAnchorEl4] = React.useState(null);
       const open4 = Boolean(anchorEl4);
       const handleClick4 = (event) => {
         setAnchorEl4(event.currentTarget);
       };
       const handleClose4 = () => {
         setAnchorEl4(null);
       };

  return (
    
    <div className='project-summary-container'>

      {/* Project Summary */}

      <div className='summary-wrapper'>
        {/* Caution Header */}

        <div className='caution-wrapper'>
          <img src={arrowRight} alt='caution' />
          <p>Scroll for more info</p>
        </div>

        {/* Project Summary Selection */}

        <div className='scroll-x'>

          <div className='summary-header'>
            <div className='title-wrapper'><h3>Project Summary</h3></div>
            
            <div className='button-wrapper'>  
            {/* Project */}
              <>
              <div onClick={handleClick} className='selection'>
                <p>Project</p>
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
                  <p style={{margin: 0, fontSize: '1rem'}}>Project</p>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose} disableRipple>
                  <p style={{margin: 0, fontSize: '1rem'}}>Task</p>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose} disableRipple>
                  <p style={{margin: 0, fontSize: '1rem'}}>Duty</p>
                </MenuItem>
                </StyledMenu>
              </>

              {/* Project Manager */}
              <>
              <div onClick={handleClick2} className='selection'>
                <p>Project Manager</p>
                <img src={arrowDown} alt="Arrow Down Icon"/>
              </div>

                <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                  'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl2}
                open={open2}
                onClose={handleClose2}
                className="styled-menu"
              >
                <MenuItem onClick={handleClose2} disableRipple>
                  <p style={{margin: 0, fontSize: '1rem'}}>Project Manager</p>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose2} disableRipple>
                  <p style={{margin: 0, fontSize: '1rem'}}>Developer</p>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose2} disableRipple>
                  <p style={{margin: 0, fontSize: '1rem'}}>Designer</p>
                </MenuItem>
                </StyledMenu>
              </>
              
              {/* Status */}
              <>
              <div onClick={handleClick3}  className='selection'>
                <p>Status</p>
                <img src={arrowDown} alt="Arrow Down Icon"/>
              </div>

              <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                  'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl3}
                open={open3}
                onClose={handleClose3}
                className="styled-menu"
              >
                <MenuItem onClick={handleClose3} disableRipple>
                  <p style={{margin: 0, fontSize: '1rem'}}>Completed</p>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose3} disableRipple>
                  <p style={{margin: 0, fontSize: '1rem'}}>Delayed</p>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose3} disableRipple>
                  <p style={{margin: 0, fontSize: '1rem'}}>At risk</p>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose3} disableRipple>
                  <p style={{margin: 0, fontSize: '1rem'}}>On going</p>
                </MenuItem>
                </StyledMenu>
              </> 
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
                {
                  SummaryData.map((data) => {
                    return(
                      <tr className='row-body' key={data.id}>
                        <td className='body-item'><p>{data.name}</p></td>
                        <td className='body-item'><p>{data.manager}</p></td>
                        <td className='body-item'><p>{data.date}</p></td>
                        <td className='body-item'><div className='status-bar'><p>{data.status}</p></div></td>
                        <td className='body-item'><div className='progress-wrapper'><p>{data.progress}</p></div></td>
                      </tr>
                    )
                  })
                }
              </tbody> 
            </table>
          </div>
        </div>
      </div>



      {/* Overall Progress */}

      <div className='overall-progress-container'>

        {/* Top */}
        <div className='top'>
          <h3>Overall Progress</h3>

          <>
            <div onClick={handleClick4}>
              <p>All</p>
              <img src={arrowDown} alt='arrow down' />
            </div>
          
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                  'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl4}
                open={open4}
                onClose={handleClose4}
                className="styled-menu"
              >
                <MenuItem onClick={handleClose4} disableRipple>
                  <p style={{margin: 0, fontSize: '1rem'}}>All</p>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose4} disableRipple>
                  <p style={{margin: 0, fontSize: '1rem'}}>New</p>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose4} disableRipple>
                  <p style={{margin: 0, fontSize: '1rem'}}>Old</p>
                </MenuItem>
            </StyledMenu>
          </>
        </div>

        {/* Middle */}
        <div className='middle'>
          <img src={progressMeasure} alt='progress measure' />
        </div>

        {/* Bottom */}
        <div className='bottom'>
          <div>
            <h3>95</h3>
            <p>Total Projects</p>
          </div>

          <div>
            <h3>26</h3>
            <p>Completed</p>
          </div>

          <div>
            <h3>35</h3>
            <p>Delayed</p>
          </div>

          <div>
            <h3>35</h3>
            <p>On going</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectSummary