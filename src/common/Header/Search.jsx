import React from 'react';
import { Link } from 'react-router-dom';

const Search = () => {

    window.addEventListener("scroll", function(){
       const search =  document.querySelector('.search');
       search.classList.toggle("active", this.window.scrollY > 100)
    })

  return (
    <>
      <section className="search pt-20 pb-20">
        <div className="container c-flex">
          <div className="logo width">
            <img src="assets/images/logo.svg" alt="" />
          </div>
          <div className="search__box c-flex">
            <i className="fa-solid fa-search"></i>
            <input type="text" name="search" id="" placeholder="Search and hit enter" />
            <span>All Category</span>
          </div>

          <div className="icon f-flex width">
            <i className="fa-solid fa-user icon__circle"></i>
            <div className="search__cart">
              <Link to="/cart">
                <i className="fa-solid fa-bag-shopping icon__circle"></i>
                <span>0</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search