import React, { useState } from 'react'
import axios from "axios";
import './App.css';
import Navbar from './components/Navbar';
import Visualizer from './components/Visualizer';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Visualizer />
    </div>
  );
}

export default App;
