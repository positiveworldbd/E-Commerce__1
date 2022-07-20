import React from 'react'
import Header from './common/Header/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
          <Header />
          <Routes>
              {/* <Route exact path="/" element={<About/>}/> */}
          </Routes>
      </Router>
    </>
  )
}

export default App
