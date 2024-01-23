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
      <div key={`${dog.src}`}>
        <Link to={`/dogs/${dog.src}`}>{dog.name}</Link>
        <img src={`/${dog.src}.jpg`} alt={dog.src} />
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

