import React, { useState } from "react";

const Navbar = ({ updateParams }) => {
  const [formData, setFormData] = useState({
    selectedAlgo: "bubble",
    selectedSize: 10,
    selectedSpeed: 1000
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('formdata', formData);
    updateParams(formData);
  };

  return (
    <div className="navbar" id="navbar">
      <div className="form-div">
        <form onSubmit={handleSubmit}>
          <label className="label">Array Size: </label>
          <select
            value={formData.selectedSize}
            defaultValue={10}
            // className="select"
            onChange={(e) => setFormData({ ...formData, selectedSize: e.target.value })}
          >
            {/* <option value={"placeholder"}>Choose one...</option> */}
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <label className="label">Algorithm:</label>
          <select
            value={formData.selectedAlgo}
            defaultValue={"bubble"}
            onChange={(e) => setFormData({ ...formData, selectedAlgo: e.target.value })}
          >
            <option value={"bubble"}>Bubble Sort</option>
            <option value={"insert"}>Insert Sort</option>
            <option value={"bogo"}>Bogo Sort</option>
            <option value={"selection"}>Selection Sort</option>
            <option value={"merge"}>Merge Sort</option>
            <option value={"tbd"}>Heap Sort</option>
          </select>
          <label className="label">Speed:</label>
          {/* todo: move speed select out of navbar. it isn't sent in the request and should be changable without re-requesting data */}
          <select
            value={formData.selectedSpeed}
            defaultValue={1000}
            onChange={(e) => setFormData({ ...formData, selectedSpeed: e.target.value })}
            >
            <option value={2000}>slow</option>
            <option value={1000}>standard</option>
            <option value={500}>fast</option>
            <option value={100}>faster</option>
          </select>
        <button className="submit-button" type="submit" id="submit">Get Data</button>
        </form>  
      </div>
    </div>
  );
}

export default Navbar;