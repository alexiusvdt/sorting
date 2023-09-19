import React from "react";

function Navbar() {
//   state = {
//     Algorithms: [
//   { value: 1, type: 'Bubble Sort' },
//   { value: 2, type: 'Selection Sort' },
//   { value: 3, type: 'Insertion Sort' },
//   { value: 4, type: 'Merge Sort' },
//   { value: 5, type: 'Quick Sort' },
//         { value: 6, type: 'Heap Sort' },
//         { value: 7, type: 'Twist Sort' },
// ],
// lengths: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
// speeds: [0.50, 0.75, 1.00, 2.00, 4.00]
// };

handleClick = (e) => {
    e.preventDefault();
    this.props.response();
}

  return (
    <div className="navbar" id="navbar">
        <button id="random" onClick = {() => this.props.newList(1)}>Random</button>
        <Algorithms 
            onChange = {this.props.onChange}
            algorithms = {this.state.Algorithms}
        />
        <Size 
            onChange = {this.props.onChange}
            lengths = {this.state.lengths}
        />
        <Speed 
            onChange = {this.props.onChange}
            speeds = {this.state.speeds}
        />
        <button id="start" onClick = {() => this.props.start()}>Start</button>
        <a 
            className="icon" 
            onClick = {(e) => this.handleClick(e)}
            href = "/">
            <i className="fa fa-bars"></i>
        </a>
    </div>
  );
}

export default Navbar;