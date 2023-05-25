import React from 'react'
import { Link } from "react-router-dom";
import navbarLinks from "./Components/data2"
import "./style/css/Navbar.css"
const Navbar = () => {
  return (
    <nav className="navbar">
        <section className="navbar_links_section">
        {
                navbarLinks.map((link) => {
                    const {id, title, to} = link
                    return (
                        <Link className='link' key={id} to={to}>{title}</Link>
                    )
                })
            }
        </section>
    </nav>

  )
}

export default Navbar