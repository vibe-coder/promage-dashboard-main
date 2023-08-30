import * as React from 'react';


import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import "./SCSS/Bio-Down-Button.scss"
import user from "../Images/ME.jpg"
import { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';


// Copy 1

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
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

export default function BioDownButton() {
  
  // Copy 2
  
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
    <div className='bio-button-container'>
      <div
      className='bio-wrapper'>
        <div onClick={handleClick} className='arrow-trigger'>
          <div className='picture'>
            <img src={user} alt='user-img' className='user-image' />
          </div>
          <div className='name'>
            <h3>Vibe Coder</h3>
            <p>Frontend Developer</p>
          </div>
          {/* <div className='arrow'>
            {checked ? <img src={arrowDown} alt='arrow-left'/> : <img style={{transform:'rotate(90deg)'}} src={arrowUp} alt='arrow-right' />}
          </div> */}
        </div>
      </div>
        
      {/* <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        className='bio-button'
      >
        Options
      </Button> */}

      {/* Copy 3 */}
      
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
          <PersonIcon />
          <p style={{margin: 0, fontSize: '1rem'}}>Profile</p>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <AdminPanelSettingsIcon />
          <p style={{margin: 0, fontSize: '1rem'}}>My Account</p>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <LogoutIcon />
          <p style={{margin: 0, fontSize: '1rem'}}>Logout</p>
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
