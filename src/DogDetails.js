import React from "react";
import { Link, useParams } from "react-router-dom";

/**
 * Props:
 *  dogs - a list of fluff
 *
 * State:
 *  None
 *
 * App --> RouteList --> DogList --> Dog
 *
 */

function DogDetails({ dogs }) {

  const { name } = useParams();
  console.log("THE MENAGERIE", dogs);
  console.log("name??", name);

  const chosenDog = dogs.filter(dog => dog.src === name)[0];

  console.log("THE CHOSEN ONE", chosenDog);

  const chosenFacts = chosenDog.facts.map((fact) => {
    return (
      <li key={fact}> {fact}</li>
    );
  });

  console.log("THE CHOSEN ONE", chosenDog);

  return (
    <div className="DogDetails">
      <div>
        {chosenDog.name}
      </div>
      <div>
        {chosenDog.age}
      </div>
      <img src={`/${chosenDog.src}.jpg`} alt={chosenDog.src} />
      <ul>
        {chosenFacts}
      </ul>
    </div>
  );
}

export default DogDetails;