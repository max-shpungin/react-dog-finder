import React, { useState } from "react";
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Nav from './Nav';
import RouteList from './RouteList';

/**
 * Props:
 *  None
 *
 * State:
 *  dogs - a list of dogs from the server request
 *
 * App --> RouteList --> DogList --> Dog
 *
 */

function App() {
  const [dogs, setDogs] = useState()
  console.log("dogs=", dogs)

  async function getDogs(){
    console.log("we are in getDogs func")
    const response = await fetch("http://localhost:5001/dogs")
    const data = await response.json();
    setDogs(data)
  }

  return (
    <div className="App">
      <h1>Doggies!</h1>
      <BrowserRouter>
      <Nav dogs={dogs} />
        <RouteList dogs={dogs} getDogs={getDogs}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
