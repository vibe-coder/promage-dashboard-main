import React from 'react'
import "./SCSS/Compnent-Container.scss"
import Header from './Header'
import Overview from './Overview'

function ComponetsContainer() {
  return (
    <div className='component-container'>
      <Header/>
      <Overview/>
    </div>
  )
}

export default ComponetsContainer