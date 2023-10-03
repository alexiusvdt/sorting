import React, { useState } from "react";

const Navbar = ({ updateParams }) => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    selectedAlgo: "bubble",
    selectedSize: 10,
    selectedSpeed: 1000
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.selectedAlgo === 'bogo'){
      const confirmed = window.confirm('Bogo sort is very inefficient and will take a long time to return a response. Are you sure you wish to continue with this request? ')
      if (!confirmed) {
        return;
      }
    }
    setLoading(true)
    // console.log('formdata', formData);
    updateParams(formData);
    setLoading(false)
  };

  return (
    <div className="navbar" id="navbar">
      {loading && (
        <div className="spinner">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100vw"
            height="100vh"
            viewBox="0 0 100 100"
            z={10}
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#000000"
              strokeWidth="4"
            />
          </svg>
        </div>
      )}

      <div className="form-div">
        <form onSubmit={handleSubmit}>
          <label className="label">Array Size: </label>
          <select
            value={formData.selectedSize}
            defaultValue={10}
            // className="select"
            onChange={(e) => setFormData({ ...formData, selectedSize: e.target.value })}
          >
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
        <button className="submit-button" type="submit" id="submit">Get Data</button>
        </form>  
      </div>
    </div>
  );
}

export default Navbar;