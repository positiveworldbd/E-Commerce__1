import React from 'react';
import cagetories from '../../data/categories.json';

const Categories = () => {

  return (
    <>
     <div className="category">
      {
        cagetories.map((value, index)=>{
          const { cateImg, cateName } = value;
          return(
            <div className="category__box f-flex" key={index}>
                <img src={cateImg} alt="" />
                <span>{cateName}</span>
            </div>
          )
        })
      }
     </div>
    </>
  )
}

export default Categories;
