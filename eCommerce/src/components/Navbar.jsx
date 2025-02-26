import React from 'react'

const Navbar = ({styleNavbar}) => {
  return (
<nav className={`text-white ${styleNavbar}`}>
  
    <a href="/">Home</a>
    <a href="#category">Category</a>
    <a href="#product">Product</a>
    <a href="#contact">Contact</a>

</nav>
      )
}

export default Navbar