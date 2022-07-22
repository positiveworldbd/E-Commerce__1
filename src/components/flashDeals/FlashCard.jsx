import React from 'react'

const FlashCard = () => {
    return (
        <>
            <div className="flash__box">
                <div className="product mt-40">
                    <div className="product__img">
                        <span className="discount">0% Off</span>
                        <img src="" alt="" />
                        <div className="product__like">
                            <label></label> <br />
                            <i class="fa-solid fa-heart"></i>
                        </div>
                    </div>
                    <div className="product__details">
                        <h3></h3>
                        <div className="product__rate">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <div className="product__price">
                            <h4></h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FlashCard