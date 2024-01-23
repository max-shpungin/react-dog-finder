import { Link, NavLink } from "react-router-dom";

/**
 * Props:
 *  dogs - an array of objects containing woof
 *
 * State:
 *  None
 *
 * App --> Nav
 *
 */

function Nav({ dogs }){

  console.log("Nav dogs: ", dogs);

  const style = {
    display: "flex" ,
    justifyContent: "center"
  }

  const doggies = dogs.map((dog)=>{
    return(
    <div key={`${dog.name}`} style={style}>
      <Link to={`/dogs/${dog.name}`}> {dog.name} </Link>
    </div>

    )
  })

  return (
    <div className="Nav">
      {doggies}
    </div>
  )
}

export default Nav;
