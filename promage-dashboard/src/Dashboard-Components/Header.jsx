import React from 'react'
import "./SCSS/Header.scss"

function Header() {
  return (
    <div className='header-container'>
      <h1 className='dashboard'>Dashboard</h1>
      <div className='user-wrapper'>
        <input className='search-input' placeholder='Search for anything...' />

        <div className='wrapper'>
          <div className='circle'>.</div>
          <div className='bio-wrapper'>
            <div className='picture'>.</div>
            <div className='name'>
              <h3>Vibe Coder</h3>
              <p>Frontend Developer</p>
            </div>
            <div className=''>
              <i className="las la-angle-down"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;