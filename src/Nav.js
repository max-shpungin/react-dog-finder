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
    <div key={`${dog.name}`}>
      <Link to={`/dogs/${dog.src}`}> {dog.name} </Link>
    </div>

    )
  })

  return (
    <div className="Nav" style={style}>
      <Link to="/">Home</Link>
      {doggies}
    </div>
  )
}

export default Nav;
