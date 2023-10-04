import React, { useState } from 'react'
import axios from "axios";
import './App.css';
import Navbar from './components/Navbar';
import Visualizer from './components/Visualizer';
import ToDoList from './components/toDoList';

const App = () => {

  const [fetchedData, setFetchedData] = useState(null)
  const [requestParams, setRequestParams] = useState({})
  const [loading, setLoading] = useState(false)
  
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
    setLoading(true)
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
    setLoading(false)
  }).catch((error) => {
    if (error.response) {
      console.log(error.response)
      console.log(error.response.status)
      console.log(error.response.headers)
      }
  })}

  return(
    <div className="App">
      {loading ? (
      <div className="loader-container">
          <ToDoList />
          <div className="spinner"></div>
      </div>
      ) : (
        <div className="wrapper">
      <Navbar 
        updateParams = {updateParams}
      />
      {fetchedData !== null &&
        <Visualizer 
          fetchedData = {fetchedData}        
        />
      }
      </div>
    )}
  </div>
  )
}

export default App;
