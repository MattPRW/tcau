import React from 'react'
import Navbuttons from '../navbutton/navbuttons'
import { Link, withRouter } from 'react-router-dom'
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
      <Link to="/">
        <h3>t.c.a.u</h3> 
      </Link>       
      </div>
      <div className='nav-buttons'>
        <Navbuttons />
      </div>
    </div>
  </div>
  )
}
}

export default withRouter(Navbar)