import React from 'react'
import "./SCSS/Overview.scss"
import overviewIcon from "../Images/overview-icon.svg"
import increaseIcon from "../Images/increase-icon.svg"
import decreaseIcon from "../Images/decrease-icon.svg"
import projectsIcon from "../Images/projects-icon.svg"
import timeIcon from "../Images/time-icon.svg"
import resourcesIcon from "../Images/resources-icon.svg"
import arrowDown from "../Images/arrow-down.svg"
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import "./SCSS/Bio-Down-Button.scss"
import Divider from '@mui/material/Divider';


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
    // boxShadow:
    //   'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
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

function Overview() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // const [checked, setChecked] = useState(false)  

  return (

    <div className='overview-container'>

      {/* Overview Header */}

      <div className='overview-header'>
        <h3>Overview</h3>
        <div onClick={handleClick} className='date'>
          <p>Last 30 days</p>
          <img src={arrowDown} alt='arrow down'/>
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
          <p style={{margin: 0, fontSize: '1rem'}}>Last 15 days</p>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose} disableRipple>
          <p style={{margin: 0, fontSize: '1rem'}}>Last 60 days</p>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose} disableRipple>
          <p style={{margin: 0, fontSize: '1rem'}}>Last 90 days </p>
        </MenuItem>
        </StyledMenu>
      </div>



      {/* Section Container */}

      <div className='section-container'>
        {/* Revenue Container */}

        <div className='container'>
          <div className='icon-1'>
            <img src={overviewIcon} alt='overview-icon' />
          </div>
          <div className='figure-wrapper'>
            <p >Total Revenue</p>
            <h1>$53,00989</h1>
            <div className='description-wrapper'>
              <img src={increaseIcon} alt='increase-icon' />
              <p>12% increase from last month</p>
            </div>
          </div>
        </div>


        {/* Projects Container */}

        <div className='container'>
          <div className='icon-1'>
            <img src={projectsIcon} alt='overview-icon' />
          </div>
          <div className='figure-wrapper'>
            <p>Projects</p>
            <h1>95<span className='calculate'>/100</span></h1>
            <div className='description-wrapper'>
              <img src={decreaseIcon} alt='increase-icon' />
              <p>10% decrease from last month</p>
            </div>
          </div>
        </div>


        {/* Time Section */}


        <div className='container'>
          <div className='icon-1'>
            <img src={timeIcon} alt='overview-icon' />
          </div>
          <div className='figure-wrapper'>
            <p>Time Spent</p>
            <h1>1022<span className='calculate'>/1300 Hrs</span></h1>
            <div className='description-wrapper'>
              <img src={increaseIcon} alt='increase-icon' />
              <p>8% increase from last month</p>
            </div>
          </div>
        </div>


        {/* Resorces Section */}


        <div className='container'>
          <div className='icon-1'>
            <img src={resourcesIcon} alt='overview-icon' />
          </div>
          <div className='figure-wrapper'>
            <p>Resources</p>
            <h1>101<span className='calculate'>/120</span></h1>
            <div className='description-wrapper'>
              <img src={increaseIcon} alt='increase-icon' />
              <p>2% increase from last month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview