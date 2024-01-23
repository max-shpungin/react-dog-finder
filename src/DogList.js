import { Link } from "react-router-dom";

const baseURL = "../public/";
/**
 * Props:
 *  doges and also get the dogges
 *
 * State:
 *  None
 *
 * App --> RouteList --> DogList --> Dog
 *
 */

function DogList({ dogs }) {
  console.log("DogList Dogs=", dogs);

  const doggies = dogs.map(dog => {
    return (
      <div key={`${dog.name}`}>
        <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
        <img src={`/${dog.name}.jpg`} alt={dog.name} />
      </div>
    );
  });

  return (
    <div className="DogList">
      {doggies}
    </div>
  );
}

export default DogList;

