import React from 'react'
import './clock3.css'
import Modal from '../modal/modal'
import description from '../../clock-description.json'
import { Link, withRouter } from 'react-router-dom'

class Clock3 extends React.Component {
  constructor() {
    super()

    this.state = {
      cells: [],
      grid: '',
      time: {day: 0, hour: 0, minute: 0, second: 0},
      second: 0,
      opacity: 'opacity',
      clock: 'clock3',
      description: null,
      show: 'off'
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.setState({description: description.clock3})
    this.interval = setInterval(() => 
    { 
      this.currentTime()
    }, 
    10) 
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  currentTime() {
    let d = new Date()
    let day = (Math.ceil(4.166666 * d.getHours())) * 3
    let hour = Math.ceil(1.66666 * d.getMinutes()) * 3
    let minute = Math.ceil(1.66666 * d.getSeconds()) * 3
    let second = Math.ceil(0.1 * d.getMilliseconds()) * 3
    this.setState({time: {day, hour, minute, second }})
    }

  handleClick() {
    this.state.show === 'off' ? this.setState({ show: 'on' }) : this.setState({ show: 'off' })
    console.log(this.state.show)
  }


  render() {
    if (!this.state.description) return (<div>loading...</div>)
    return (
        <div className="clock3 clock">    
          <div className="clock-bars">
            <div className='bar'>
              <div style={{ height:this.state.time.day}} className='color-1 bar-fill day'></div>
            </div>
            <div className='bar'>
              <div style={{ height:this.state.time.hour}} className='color-2 bar-fill hour'></div>
            </div>
            <div className='bar'>
              <div style={{ height:this.state.time.minute}} className='color-3 bar-fill minute'></div>
            </div>
            <div className='bar'>
              <div style={{ height:this.state.time.second}} className='color-1 bar-fill second'></div>
              
            </div>
          </div>
          <div  onClick={this.handleClick} className={`modal-background ${this.state.show === 'off' ? 'modal-off' : ''}`}>
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

export default withRouter(Clock3)