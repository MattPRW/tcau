import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import './navbuttons.css';


class Navbuttons extends React.Component {

  constructor() {
    super()

    this.state = {
      selected: 'home'
    }
  }

  render() {
    return (
      <div className='nav-buttons'>
      <div className='nav-button-container'>
        <ul className='nav-button-list'>
          <Link className="nav-button  color-1" to="/clock1"></Link>
          <Link className="nav-button btn-2 color-2" to="/clock2"></Link>
          <Link className="nav-button btn-3 color-3" to="/clock3"></Link>
        </ul>
      </div>
      </div>
    )
  }
}

export default withRouter(Navbuttons)