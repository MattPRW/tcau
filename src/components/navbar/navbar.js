import React from 'react'
import Navbuttons from '../navbutton/navbuttons'
import './navbar.css';

class Navbar extends React.Component {

  constructor() {
    super()

    this.state = {
      selected: 'home'
    }
  }

render() {
  return(
  <div className='navbar-container'>
    <div className='navbar'>
      <div className='title-container'>
        <h3>t.c.a.u</h3>        
      </div>
      <div className='nav-buttons'>
        <Navbuttons />
      </div>
    </div>
  </div>
  )
}
}

export default Navbar