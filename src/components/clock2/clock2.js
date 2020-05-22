import React from 'react'
import './clock2.css'
import Modal from '../modal/modal'
import description from '../../clock-description.json'

class Clock2 extends React.Component {
  constructor() {
    super()

    this.state = {
      cells: [],
      grid: '',
      minutes: 0,
      opacity: 'opacity',
      description: '',
      show: 'off'
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.setState({description: description.clock2})
    this.interval = setInterval(() => 
    { 
      this.showTime()
      this.state.opacity === 'opacity' ? this.setState({ opacity: '' }) : this.setState({ opacity: 'opacity' })
    }, 
    500) 
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  showTime() {   
    this.currentTime()  

  }

  currentTime() {
    let d = new Date()
    let minutes = (d.getHours()*60)+(d.getMinutes())
    minutes = (minutes.toString(3))
    for (let i = minutes.length; i < 7; i++){
      minutes = `0${minutes}`
    }
    let cells = minutes.split('')
    for (let i = 0; i < 7; i++){
      cells[i] === '0' ? cells[i] = 'color-1' 
      : cells[i] === '1' ? cells[i] = 'color-2' 
      : cells[i] = 'color-3' 
    }
    this.setState({ cells })
    // console.log(this.state.cells)
  }

  handleClick() {
    this.state.show === 'off' ? this.setState({ show: 'on' }) : this.setState({ show: 'off' })
  }

  render() {
    if (!this.state.cells) return null
    // console.log(this.state.cells)
    return (
        <div className="clock2 clock">    
          <div className="clockgrid">
            <div className={`outside cell2 ${this.state.cells[6]} `}>
              <div className={`cell2 ${this.state.cells[5]} `}>
                <div className={`cell2 ${this.state.cells[4]} `}>  
                  <div className={`cell2 ${this.state.cells[3]} `}> 
                    <div className={`cell2 ${this.state.cells[2]} `}>
                      <div className={`cell2 ${this.state.cells[1]} `}> 
                        <div className={`cell2 ${this.state.cells[0]} `}>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div  onClick={this.handleClick} className={`modal-container ${this.state.show === 'off' ? 'modal-off' : ''}`}>
            <Modal { ...this.state }/>
          </div>
          <div className="back-button">
            {'<'}
          </div>
          <div onClick={this.handleClick} className="info-button">
            i
          </div>
        </div>
    )
  }
}

export default Clock2