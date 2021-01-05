import React from 'react'
//@ts-ignore
import { Link } from 'react-router-dom'

const NavBar = () => (
  <div>
    <div><Link to="/">Home</Link> <Link to="/tree">TreeContainer</Link> <Link to="/assemble">AssmbleContainer</Link></div>
  </div>
)

export default NavBar