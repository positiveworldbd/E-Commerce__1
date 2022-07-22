import React from 'react';
import Data from '../../data/flash';
import Slider from "react-slick";


const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="next">
                <i className="fa-solid fa-arrow-right-long"></i>
            </button>
        </div>
    )
}

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="prev">
                <i className="fa-solid fa-arrow-left-long"></i>
            </button>
        </div>
    )
}

const FlashCard = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }

    return (

        <>
            <Slider {...settings}>
                {
                    Data.map((productItem) => {
                        const { discount, cover, name, price } = productItem;
                        return (

                            <div className="flash__box" key={productItem.id}>
                                <div className="product mt-40">
                                    <div className="product__img">
                                        <span className="discount">{discount}% Off</span>
                                        <img src={cover} alt="" />
                                        <div className="product__like">
                                            <label>0</label> <br />
                                            <i className="fa-solid fa-heart"></i>
                                        </div>
                                    </div>
                                    <div className="product__details">
                                        <h3>{name}</h3>
                                        <div className="product__rate">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <div className="product__price">
                                            <h4>{price}.00</h4>
                                            <button>
                                                <i className="fa-solid fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </>
    )
}

export default FlashCard