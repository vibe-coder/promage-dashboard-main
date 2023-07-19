import React from 'react'
import "./SCSS/Header.scss"

function Header() {
  return (
    <div className='header-container'>
      <h1 className='dashboard'>Dashboard</h1>
      <div className='user-wrapper'>
        <input className='search-input' placeholder='Search' />
        <div className='bio-wrapper'>
          <div>Picture</div>
          <div>Name</div>
          <div>aroow down</div>
        </div>
      </div>
    </div>
  )
}

export default Header;