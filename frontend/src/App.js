import { useState } from 'react'
import axios from "axios";
import logo from './logo.svg';
import './App.css';

function App() {

  const [nameData, setNameData] = useState(null)
  const [sortData, getSortData] = useState(null)

  function getSortData() {
    axios({
      method: "GET",
      url:"/sort",
      type: "bubble",
    })
    .then((response) => {
      const res = response.data
      setNameData(({
        sortObj: res.sort_obj}))
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })}

  // example GET request
  function getData() {
    axios({
      method: "GET",
      url:"/data",
    })
    .then((response) => {
      const res = response.data
      setNameData(({
        first_name: res.fname,
        last_name: res.lname}))
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })}


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <p>request a sort: </p><button onClick={getSortData}>Click me</button>
        {sortData && <div>
              <p>here's the sort object!: {sortData.sortObj}</p>
        </div>}

        <p>To get your name info: </p><button onClick={getData}>Click me</button>
        {nameData && <div>
              <p>first name: {nameData.first_name}</p>
              <p>last: {nameData.last_name}</p>
            </div>
        }

      </header>
    </div>
  );
}

export default App;
