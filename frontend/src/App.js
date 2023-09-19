import { useState } from 'react'
import axios from "axios";
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Visualizer from './components/Visualizer';


function App() {

  // const [nameData, setNameData] = useState(null)
  const [sortData, setSortData] = useState(null)

  function getBubbleData() {
    console.log('starting fetch')
    axios({
      method: "GET",
      url:"/sort",
      params: {
        "func": "bubble"
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

  // example GET request
  // function getData() {
  //   axios({
  //     method: "GET",
  //     url:"/data",
  //   })
  //   .then((response) => {
  //     const res = response.data
  //     setNameData(({
  //       first_name: res.fname,
  //       last_name: res.lname}))
  //   }).catch((error) => {
  //     if (error.response) {
  //       console.log(error.response)
  //       console.log(error.response.status)
  //       console.log(error.response.headers)
  //       }
  //   })}


  return (
    <div className="App">
      <Navbar />
      <Visualizer />

        <p>request a sort: </p><button onClick={getBubbleData}>Click me</button>
        {/* {sortData && <div>
              <p>we got something!: {sortData.sortDict}</p>
        </div>} */}

    </div>
  );
}

export default App;
