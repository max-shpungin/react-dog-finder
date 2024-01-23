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

  const chosenDog = dogs.filter(dog => dog.name === name)[0];

  const chosenFacts = chosenDog.facts.map((fact) => {
    return (
      <li key={fact}> {fact}< /li>
        )
  })

        console.log("THE CHOSEN ONE",chosenDog);

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
        )
}

        //TODO: WTF ARE YOU YELLING AT ME!?!?!?

        export default DogDetails;