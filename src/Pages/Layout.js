import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import logo from "./Images/myLogo.png"

import 'bootstrap/dist/css/bootstrap.min.css';

function Layout() {
  return (
    <main className='main-layout'>
    <div className='navbar-page navbar navbar-expand-lg navbar-dark'>
        <div className='container-fluid'>
        <div className='logo-section'> 
            <a link="/" className='navbar-brand'><img src={logo}/></a>
        </div>
        <nav className='links-section'>
        <ul className='navbar-nav links-section'>
            <li className='nav-item'>
                <Link to="/" className='nav-link'>Home</Link>
            </li>

            <li className='nav-item'>
                <Link to={"/about"} className='nav-link'>About</Link>
            </li>
            <li className='nav-item'>
                <Link to={"/projects"} className='nav-link'>Projects</Link>
            </li>
        </ul>
        </nav>
    <div className='contact-section'>
        <Link to={"/contact"} className='nav-link'>Contact</Link>
    </div>
        </div>
    </div>

    <section className='data-section'>
        <article className='articles'>
         <Outlet/>    
        </article>
    </section>
    
    </main>
    

  )
}

export default Layout