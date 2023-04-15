import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className='nav'>
      <h2>Accordian</h2>
     <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/accordian"}>Accordian</Link></li>
     </ul>
    </div>
  )
}

export default NavBar