import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Axios from "axios";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";

function App() {
  Axios({
    method: "GET",
    url: "http://localhost:5000/",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    console.log(res.data.message);
  });

  return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;