
import { Route, Routes, Navigate } from "react-router-dom";

import DogList from "./DogList";
import DogDetails from "./DogDetails";
import { Form } from "react-router-dom";

function RouteList() {
  <Routes>
    <Route path="/" element={DogList}></Route>
    <Route path="/dogs/:name" element={DogDetails}></Route>
  </Routes>;
  return (
    <div className="RouteList"></div>
  );
}

export default RouteList;