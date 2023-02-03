import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import logo from "./Images/myLogo.png"

import 'bootstrap/dist/css/bootstrap.min.css';

function Layout() {
  return (
    <main className='main-layout'>
    <div className='navbar-page navbar navbar-expand-lg navbar-dark'>
        <div className='container-fluid'>
        <nav className='links-section'>
        <ul className='navbar-nav'>
            <Link to="/" className='nav-item'><img alt='logo' className='nav-link' src={logo}/> 
            </Link>
        </ul>
        </nav>
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