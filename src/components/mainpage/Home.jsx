import React from 'react'
import Categories from './Categories'
import Slider from './Slider';

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="container d-flex">
          <Categories />
          <Slider />
        </div>
      </section>
    </>
  )
}

export default Home