
import { Route, Routes, Navigate } from "react-router-dom";

import DogList from "./DogList";
import DogDetails from "./DogDetails";
import { Form } from "react-router-dom";

/**
 * Props:
 * - dogs : a list of all dogs
 * - getDogs : a function to be called in parent
 *
 * State:
 *  dogs - a list of dogs from the server request
 *
 * App --> RouteList --> DogList --> Dog
 *
 */

function RouteList({ dogs }) {
  console.log("RouteList Dogs=", dogs)

  return (
    <Routes>
      <Route path="/" element={<DogList dogs={dogs} />}></Route>
      <Route path="/dogs/:name" element={<DogDetails dogs={dogs}/>}></Route>
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RouteList;