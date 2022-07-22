import React from 'react';
import slideCard from '../../data/slideCard.json'

const SlideCart = () => {
  return (
    <>
      {
        slideCard.map((value, index) => {
          const { title, desc, cover } = value;
          return (
            <div className="homeSlider__box d-flex top" key={index}>
              <div className="homeSlider__left">
                <h1>{title}</h1>
                <p>{desc}</p>
                <button className="btn-primary">Visit Collections</button>
              </div>
              <div className="homeSlider__right">
                <img src={cover} alt="" />
              </div>
            </div>
          )
        })
      }
    </>
  )
}

export default SlideCart