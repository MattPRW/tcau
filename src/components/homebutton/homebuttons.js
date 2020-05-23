import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import './homebuttons.css';

class Homebuttons extends React.Component {

  render() {
    return (
 
      <div className='home-button-container'>
        <ul className='home-button-list'>
          <Link className="home-button button color-1" to="/clock1"></Link>
          <Link className="home-button button color-2" to="/clock2"></Link>
          <Link className="home-button button color-3" to="/clock3"></Link>
        </ul>
      </div>
    )
  }
}

export default withRouter(Homebuttons)