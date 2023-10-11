import React, { useEffect, useState } from "react";

const Navbar = ({ updateParams }) => {
  const [formData, setFormData] = useState({})

  // default state options
  useEffect(() => {
    setFormData({
      selectedAlgo: "bubble",
      selectedSize: 10,
      });
  }, []);
    
  const handleSubmit = (e) => {
    e.preventDefault();
    // checkValid();
    if (formData.selectedAlgo === 'bogo'){
      const confirmed = window.confirm('Bogo sort is very inefficient and will take a long time to return a response. Are you sure you wish to continue with this request? ')
      if (!confirmed) {
        return;
      }
    }
    updateParams(formData);
    console.log('formdata', formData);
  };

  return (
    <div className="navbar" id="navbar">
      <div className="form-div">
        <form onSubmit={handleSubmit}>
          <label className="label">Array Size: </label>
          <select
            id="size"
            value={formData.selectedSize}
            defaultValue={formData.selectedSize}
            onChange={(e) => setFormData({ ...formData, selectedSize: e.target.value })}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
          <label className="label">Algorithm:</label>
          <select
            id="algo"
            defaultValue={formData.selectedAlgo}
            value={formData.selectedAlgo}
            onChange={(e) => setFormData({ ...formData, selectedAlgo: e.target.value })}
          >
            <option value={"bubble"}>Bubble Sort</option>
            <option value={"insert"}>Insert Sort</option>
            <option value={"bogo"}>Bogo Sort</option>
            <option value={"selection"}>Selection Sort</option>
            {/* <option value={"merge"}>Merge Sort</option> */}
            {/* <option value={"tbd"}>Heap Sort</option> */}
          </select>
        <button className="submit-button" type="submit" id="submit">Get Data</button>
        </form>  
      </div>
    </div>
  );
}

export default Navbar;