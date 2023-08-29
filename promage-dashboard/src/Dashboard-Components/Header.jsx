import React from 'react'
import "./SCSS/Header.scss"
import user from "../Images/ME.jpg"
import arrowDown from "../Images/arrow-down.svg"
import searchIcon from "../Images/icons8-search.svg"
import BioDownButton from './BioDownButton'


function Header() {
  return (
    <div className='header-container'>
      <div className='header-wrapper'>
        {/* Title */}

        <h1 className='dashboard'>Dashboard</h1>

        {/* Bio Wrapper */}

        {/* <div className='bio-wrapper'>
          <div className='picture'>
            <img src={user} alt='user-img' className='user-image' />
          </div>

          <div className='name'>
            <h3>Vibe Coder</h3>
            <p>Frontend Developer</p>
          </div>

          <div className='arrow'>
            <img src={arrowDown} alt="Arrow Down Icon"/>
          </div>
        </div> */}

        <BioDownButton/>
      </div>

      {/* Search Wrapper */}
      
      <div className='search-wrapper'>
        <div className='wrapper'>
          <input className='search-input' placeholder='Search for anything...' />
          
          <button className='circle'>
            <img src={searchIcon} alt="SearchIcon" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header;