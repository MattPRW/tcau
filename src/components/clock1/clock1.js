import React from 'react'
import _ from 'lodash'
import './clock1.css'
import Modal from '../modal/modal'
import description from '../../clock-description.json'
import { Link, withRouter } from 'react-router-dom'

class Clock1 extends React.Component {
  constructor() {
    super()

    this.state = {
      cells: [],
      grid: '',
      minutes: 0,
      description: '',
      show: 'off'
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.setState({description: description.clock1})
    this.interval = setInterval(() => 
    { 
      this.mapCells()
      this.showTime()
    }, 
    1000) 
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  showTime() {   
    this.currentTime()  
    this.setState({cells: [] })
    for (let i = 0; i < this.state.minutes; i++) {
          this.state.cells.push('on')
        }
    for (let i = this.state.minutes; i < 1440; i++) {
        this.state.cells.push('off')
    }
    this.setState({cells:_.shuffle(this.state.cells)})
  }

  currentTime() {
    let d = new Date()
    let minutes = (d.getHours()*60)+(d.getMinutes())
    this.setState({ minutes })
  }

  mapCells() {
   let grid = this.state.cells.map(cell => (
      <div key={cell._id} className= {`cell ${cell}`}> </div>
    ))    
    this.setState({ grid })
  }

  handleClick() {
    this.state.show === 'off' ? this.setState({ show: 'on' }) : this.setState({ show: 'off' })
  }

  render() {
    if (!this.state.minutes) return (<div>loading...</div>)
    // console.log(this.state.cells)
    return (
        <div className="clock1 clock">    
          <div className="clockgrid">
            {this.state.grid}
          </div>
          <div  onClick={this.handleClick} className={`modal-container ${this.state.show === 'off' ? 'modal-off' : ''}`}>
            <Modal { ...this.state }/>
          </div>
          <Link to="/">
            <div className="back-button">
              {'<'}
            </div>
          </Link>
          <div onClick={this.handleClick} className="info-button">
            i
          </div>
        </div> 
    )
  }
}

export default withRouter(Clock1)