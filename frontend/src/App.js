import React, { Component, useState } from 'react'
import axios from "axios";
import './App.css';
import Navbar from './components/Navbar';
import Visualizer from './components/Visualizer';

const App = () => {

  const [fetchedData, setFetchedData] = useState(null)
  const [requestParams, setRequestParams] = useState(null)
  const [disableControls, setDisableControls] = useState(false)
  
const updateParams = (formData) => {
  setRequestParams(formData);
  fetchData(formData); 
};


 /**
 * @function
 * calls the api & returns an object & stashes into state
 * 0 will be the original randomized array
 * 1 will contain subarrays with each step of the process
 */

 const fetchData = (params) => {
  setDisableControls = true
  console.log('starting fetch')
  axios({
    method: "GET",
    url:"/sort",
    params: {
      "func": params.selectedAlgo,
      size: params.selectedSize
    },
  })
  .then((response) => {
  console.log(response)
  const res = response.data
  setFetchedData(({res}))
 }).catch((error) => {
   if (error.response) {
     console.log(error.response)
     console.log(error.response.status)
     console.log(error.response.headers)
     }
 })
setDisableControls = false
}

  
  return(
    <div className="App">
    <Navbar 
      setRequestParams = {updateParams}
    />
    <Visualizer 
      fetchedData = {fetchedData}
    />
  </div>
  )
}



export default App;
