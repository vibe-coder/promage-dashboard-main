import React from 'react'
import "./SCSS/Header.scss"
import user from "../Images/ME.jpg"

function Header() {
  return (
    <div className='header-container'>
      
      <div className='dashboard-wrapper'>
        <h1 className='dashboard'>Dashboard</h1>

        <div className='bio-wrapper'>
          <div className='picture'>
            <img src={user} alt='user-img' className='user-image' />
          </div>

          <div className='name'>
            <h3>Vibe Coder</h3>
            <p>Frontend Developer</p>
          </div>

          <div className='arrow'>
            .
          </div>
        </div>
      </div>
      
      
      <div className='search-wrapper'>
        <div className='wrapper'>
          <input className='search-input' placeholder='Search for anything...' />
          <div className='circle'>.</div>
        </div>
      </div>
    </div>
  )
}

export default Header;