import React from "react";

function Navbar() {
//   state = {
//     Algorithms: [
//   { value: 1, type: 'Bubble Sort' },
//   { value: 2, type: 'Selection Sort' },
//   { value: 3, type: 'Insertion Sort' },
//   { value: 4, type: 'Merge Sort' },
//   { value: 5, type: 'Quick Sort' },
//   { value: 6, type: 'Heap Sort' },
//   { value: 7, type: 'Twist Sort' },
// ],
// lengths: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
// speeds: [0.50, 0.75, 1.00, 2.00, 4.00]
// };

function doSomething() {
    // pass
}

function submitData() {
    // pass
}

  return (
    <div className="navbar" id="navbar">
        <p>ceci n'est pas une navbar</p>
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