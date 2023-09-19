import React, { useState } from "react";
import axios from "axios";

function Navbar() {
 const [sortData, setSortData] = useState(null)

 function getBubbleData() {
   console.log('starting fetch')
   axios({
     method: "GET",
     url:"/sort",
     params: {
       "func": "bubble",
       size: 50
     },
   })
   .then((response) => {
     const res = response.data
     setSortData(({
       sortDict: res}))
   }).catch((error) => {
     if (error.response) {
       console.log(error.response)
       console.log(error.response.status)
       console.log(error.response.headers)
       }
   })}

function doSomething() {
    // pass
}

function submitData() {
    // pass
}

  return (
    <div className="navbar" id="navbar">
        <p>request a sort: </p><button onClick={getBubbleData}>Click me</button>
        <div className="form">
            <label>Size: </label>
            <select id="arrSize" name="size">
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50" selected>50</option>
                <option value="100">100</option>
            </select>
            <label>Algorithm: </label>
            <select id="algorithm" name="algorithm">
                <option value="bubble">Bubble Sort</option>
                <option value="merge">Merge Sort</option>
                <option value="heap">Heap Sort</option>
            </select>
            <label>Speed: </label>
            <select id="speed" name="speed">
                <option value="half">0.5x</option>
                <option value="standard" selected>1x</option>
                <option value="fast">2x</option>
            </select>

            <button id="start" onClick = {submitData()}>Start</button>
        </div>
    </div>
  );
}

export default Navbar;