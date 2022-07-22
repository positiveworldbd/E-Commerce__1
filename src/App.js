import React from 'react'
import Header from './common/Header/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pages from './pages/Pages';
import Data from './data/flash';

const App = () => {
  // setep 1: Fetch data from database;

  const [ productItems ] = Data;

  // const [cardItem, setCardItem] = useState([]);

  return (
    <>
      <Router>
          <Header />
          <Routes>
              <Route exact path="/" element={<Pages productItems={productItems}/>}/>
          </Routes>
      </Router>
    </>
  )
}

export default App
