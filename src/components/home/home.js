import React from 'react';
import HomeButtons from '../homebutton/homebuttons'
import './home.css';

class Home extends React.Component {

  render() {
    return (     
      <div className='home'>
        <div className='hero-text-container'>
          <div className='hero-text'>
            <h1 >these <br />clocks <br />are <br />useless...</h1>
          </div> 
        </div>
        <div className='home-button-container'>
          <HomeButtons />
        </div>
      </div>
    )
  }
}

export default Home