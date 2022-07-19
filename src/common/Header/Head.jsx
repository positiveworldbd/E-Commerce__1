import React from 'react'

const Head = () => {
  return (
    <>
      <section className="head theme-bg">
        <div className="container d_flex">
          <div className="head__left row">
            <i className="fa-solid fa-phone"></i>
            <label>+88012 3457 7894</label>
            <i className="fa-solid fa-envelope"></i>
            <label>example@gmail.com</label>
          </div>
          <div className="head__right row text-right">
            <label>Theme FAQ's</label>
            <label>Need Helps</label>
            <span>🅾️</span>
            <label>EN</label>
            <span>🅾️</span>
            <label>USD</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head