import { Link } from "react-router-dom";

import whiskey from "../public/whiskey.jpg";
import perry from "../public/perry.jpg";
import duke from "../public/duke.jpg";

// const dogePix = {
//   whiskey : whiskey
//   perry : perry
//   duke :
// }

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

async function DogList({ dogs, getDogs }) {

  // get doges

  //will need images too

  await getDogs();

  //show doeggeees

  const dogees = dogs.map((doge) => {
    let imgURL = baseURL + doge.name;
    let dogURL = "/dogs" + doge.name;
    return (
      <div>
        <Link to={dogURL}>doge.name</Link>
        <img src={imgURL} alt={doge.name} />
      </div>
    );
  });

  return (
    <div className="DogList">
      {dogees}
    </div>
  );
}

export default DogList;

