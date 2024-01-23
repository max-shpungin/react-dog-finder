import React, { useState, useEffect } from "react";
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
  const [dogs, setDogs] = useState({
    data : null,
    needDogs : true,
  });

  async function getDogs(){
    const response = await fetch("http://localhost:5001/dogs");
    const data = await response.json();

    setDogs([...data], dogs.needDogs = false);
  }

  if (dogs.needDogs){
    getDogs();
    return "Loading"
  }


  return (
    <div className="App">
      <h1>Doggies!</h1>
      <BrowserRouter>
      <Nav dogs={dogs} />
        <RouteList dogs={dogs} />
      </BrowserRouter>
    </div>
  );
}

export default App;
