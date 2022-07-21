import React from 'react'
import Categories from './Categories'
import SlideCart from './SlideCart'

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="container d-flex">
          <Categories />
          <SlideCart />
        </div>
      </section>
    </>
  )
}

export default Home