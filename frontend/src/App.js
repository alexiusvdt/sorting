import React, { useState } from 'react'
import axios from "axios";
import './App.css';
import Navbar from './components/Navbar';
import Visualizer from './components/Visualizer';

const App = () => {

  const [fetchedData, setFetchedData] = useState(null)
  const [requestParams, setRequestParams] = useState({})
  
  /**
  * @function
  * takes form data from child, sets params for axios, and executes fetch 
  */
  const updateParams = (formData) => {
    setRequestParams({ ...formData });
    fetchData(formData); 
  };

  /**
  * @function
  * calls the api & returns an object & stashes into state
  * 0 will be the original randomized array
 * 1 will contain subarrays with each step of the process
 */
  const fetchData = (requestParams) => {
    // console.log('starting fetch')
    axios({
      method: "GET",
      url:"/sort",
      params: {
        "func": requestParams.selectedAlgo,
        size: requestParams.selectedSize
      },
    })
    .then((response) => {
    console.log(response)
    const data = response.data
    setFetchedData(({data}))
  }).catch((error) => {
    if (error.response) {
      console.log(error.response)
      console.log(error.response.status)
      console.log(error.response.headers)
      }
  })}

  return(
    <div className="App">
    <Navbar 
      updateParams = {updateParams}
    />
    {/* if fetchedData null, don't render this component */}
    {fetchedData !== null &&
      <Visualizer 
        fetchedData = {fetchedData}
        speed = {requestParams.selectedSpeed}
        // need to pass down speed to modify delay timer
      />
    }
  </div>
  )
}

export default App;
