import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css';
import '../reset.css';
import '../index.css';

import Home from '../home/home';
import Clock1 from '../clock1/clock1';
import Clock2 from '../clock2/clock2';
import Clock3 from '../clock3/clock3';
import Navbar from '../navbar/navbar';

function App() {
return(
  <BrowserRouter>
    <>
      <Navbar />
      { <Switch>
        <Route exact path="/" component= {Home} />
        <Route path="/clock1" component={Clock1}/>
        <Route path="/clock2" component={Clock2} />
        <Route path="/clock3" component={Clock3}/> 
      </Switch> }
    </>
  </BrowserRouter>
  )
}

export default App;
