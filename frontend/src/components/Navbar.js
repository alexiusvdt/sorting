import React, { useState } from "react";
import axios from "axios";

function Navbar() {
  const [sortData, setSortData] = useState(null)
  const [selectedSize, setSelectedSize] = useState(null)
  const [selectedAlgo, setSelectedAlgo] = useState(null)
  const [selectedSpeed, setSelectedSpeed] = useState(null)

 /**
 * @function
 * calls the api & returns an object & stashes into state
 * 0 will be the original randomized array
 * 1 will contain subarrays with each step of the process
 * ~currently hardcoded~
 */

  function getBubbleData() {
    console.log('starting fetch')
    axios({
      method: "GET",
      url:"/sort",
      params: {
        "func": "bubble",
        size: 5
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

// function showSortData() {
//   for (let i = 0; i <= sortData.length; i++) {
//     console.log(sortData[i]);
//   }
// }

function submitData() {
    // pass
}

  return (
    <div className="navbar" id="navbar">
        <p>request a sort: </p><button onClick={getBubbleData}>Dummy Request</button>
        <div className="form">
        <label>Array Size: </label>
        <select
          value={selectedSize}
          defaultValue={"10"}
          onChange={(e) => setSelectedSize(e.target.value)}
        >
          {/* <option value={"placeholder"}>Choose one...</option> */}
          <option value={"10"}>10</option>
          <option value={"25"}>25</option>
          <option value={"50"}>50</option>
          <option value={"100"}>100</option>
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
        <button id="start" onClick = {submitData()}>Show me!</button>
        </div>
    </div>
  );
}

export default Navbar;