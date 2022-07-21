import React from 'react'
import Header from './common/Header/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pages from './pages/Pages';

const App = () => {
  return (
    <>
      <Router>
          <Header />
          <Routes>
              <Route exact path="/" element={<Pages/>}/>
          </Routes>
      </Router>
    </>
  )
}

export default App
