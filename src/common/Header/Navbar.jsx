import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [MobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <header>
        <div className="container d-flex">
          <div className="categories d-flex">
            <span className="fa-solid fa-border-all"></span>
            <h4>
              Categories <i className="fa-solid fa-chevron-down"></i>
            </h4>
          </div>
          <div className="navlink">
            <ul className="nav">
              <li><NavLink to="/">home</NavLink></li>
              <li><NavLink to="/user">user account</NavLink></li>
              <li><NavLink to="/vendor">vendor account</NavLink></li>
              <li><NavLink to="/track">track my order</NavLink></li>
              <li><NavLink to="/contact">contact</NavLink></li>
            </ul>
            <button className="toggle" onClick={() => setMobileMenu(!MobileMenu)}>
              {
                MobileMenu ? <i className="fa-solid fa-times"></i> : <i className="fa-solid fa-bars"></i>
              }
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar