import React, { Component, useState } from 'react'
import axios from "axios";
import './App.css';
import Navbar from './components/Navbar';
import Visualizer from './components/Visualizer';

class App extends Component {
  state = { 
    array: [],
    arraySteps: [],
    colorKey: [],
    colorSteps: [],
    currentStep: 0,
    count: 0,
    delay: 100,
    algorithm: '',
    timeouts: []
  }
  render() {
    return(
      <div className="App">
      <Navbar />
      <Visualizer />
    </div>
    )
  }
}

export default App;
