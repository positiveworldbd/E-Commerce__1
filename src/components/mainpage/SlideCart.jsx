import React from 'react';
import slideCard from '../../data/slideCard.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SlideCart = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots)=>{
      return <ul style={{margin: "0px"}}>{dots}</ul>
    },
  }

  return (
    <>
      <Slider {...settings}>
        {
          slideCard.map((value, index) => {
            const { title, desc, cover } = value;
            return (
              <div className="homeSlider__box d-flex mt-80" key={index}>
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
      </Slider>
    </>
  )
}

export default SlideCart