import React from 'react'

const Navbar = ({stylesNavbar}) => {
  return (
<nav className={`${stylesNavbar}`}>
    <a href="">Home</a>
    <a href="">Shop</a>
    <a href="">About</a>
    <a href="">Contact</a>

</nav>
      )
}

export default Navbar