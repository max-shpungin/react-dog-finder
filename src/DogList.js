import { Link } from "react-router-dom";

const baseURL = "../public/";
/**
 * Props:
 *  doges -  a list of dogs from the server request
 *
 * State:
 *  None
 *
 * App --> RouteList --> DogList --> Dog
 *
 */

//name instead of src for the alt text TODO:
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

