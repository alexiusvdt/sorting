import React, { useState } from "react";
import axios from "axios";

function Navbar() {
  const [sortData, setSortData] = useState(null)
  const [selectedSize, setSelectedSize] = useState(5)
  const [selectedAlgo, setSelectedAlgo] = useState("bubble")
  const [selectedSpeed, setSelectedSpeed] = useState("std")

 /**
 * @function
 * calls the api & returns an object & stashes into state
 * 0 will be the original randomized array
 * 1 will contain subarrays with each step of the process
 * ~currently hardcoded~
 */

  function getData() {
    console.log('starting fetch')
    axios({
      method: "GET",
      url:"/sort",
      params: {
        "func": selectedAlgo,
        size: selectedSize
      },
    })
    .then((response) => {
    console.log(response)
    const res = response.data
    setSortData(({res}))
   }).catch((error) => {
     if (error.response) {
       console.log(error.response)
       console.log(error.response.status)
       console.log(error.response.headers)
       }
   })}

  return (
    <div className="navbar" id="navbar">
        {/* <p>request a sort: </p><button onClick={getBubbleData}>Dummy Request</button> */}
        <div className="form">
        <label>Array Size: </label>
        <select
          value={selectedSize}
          defaultValue={5}
          onChange={(e) => setSelectedSize(e.target.value)}
        >
          {/* <option value={"placeholder"}>Choose one...</option> */}
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        <label>Algorithm: </label>
        <select
          value={selectedAlgo}
          defaultValue={"bubble"}
          onChange={(e) => setSelectedAlgo(e.target.value)}
        >
          <option value={"bubble"}>Bubble Sort</option>
          <option value={"merge"}>Merge Sort</option>
          <option value={"tbd"}>Heap Sort</option>
        </select>
        <label>Speed: </label>
        <select
          value={selectedSpeed}
          defaultValue={"std"}
          onChange={(e) => setSelectedSpeed(e.target.value)}
        >
          <option value={"half"}>0.5x</option>
          <option value={"std"}>1x</option>
          <option value={"fast"}>2x</option>
          <option value={"sanic"}>100x</option>
        </select>
        <button id="start" onClick = {getData}>Show me!</button>
        </div>
    </div>
  );
}

export default Navbar;