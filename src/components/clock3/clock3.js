import React from 'react'
import './clock3.css'
import Modal from '../modal/modal'
import description from '../../clock-description.json'
// import Info from '../info/info'

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
    if (!this.state.description) return null
    return (
        <div className="clock3 clock">    
          <div className="clockgrid shapes">
            <div className='bar'>
              <div style={{ height:this.state.time.day}} className='color-1 shape day'></div>
            </div>
            <div className='bar'>
              <div style={{ height:this.state.time.hour}} className='color-2 shape hour'></div>
            </div>
            <div className='bar'>
              <div style={{ height:this.state.time.minute}} className='color-3 shape minute'></div>
            </div>
            <div className='bar'>
              <div style={{ height:this.state.time.second}} className='color-1 shape second'></div>
              
            </div>
          </div>
          <div  className={`modal-container ${this.state.show === 'off' ? 'modal-off' : ''}`}>
            <Modal { ...this.state }/>
          </div>
          <div onClick={this.handleClick} className="info-button">
            i
          </div>
        </div>
    )
    }
  }

export default Clock3