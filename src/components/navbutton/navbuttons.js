import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import './navbuttons.css';


class Navbuttons extends React.Component {

  constructor() {
    super()

    this.state = {
      selected: 'home'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    let selected = e.target.id
    this.setState({ selected })
    // console.log(this.state.selected)
  }

  render() {
    return (
      <div className='nav-buttons'>
      <div className='nav-button-container'>
        <ul className='nav-button-list'>
          <Link onClick={this.handleClick} id="clock1" className="nav-button btn-1 color-1" to="/clock1"></Link>
          <Link onClick={this.handleClick} id="clock2" className="nav-button btn-2 color-2" to="/clock2"></Link>
          <Link onClick={this.handleClick} id="clock3" className="nav-button btn-3 color-3" to="/clock3"></Link>
        </ul>
      </div>
      </div>
    )
  }
}

export default withRouter(Navbuttons)