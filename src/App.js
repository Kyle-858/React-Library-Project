//import "./App.css"
import React, { useState, useEffect} from 'react'
import Nav from "./components/Nav.jsx"
import Footer from './components/Footer.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Books from './Pages/Books.jsx'
import { books } from "./data"
import BookInfo from './Pages/BookInfo.jsx'
import Cart from './Pages/Cart.jsx'

function App() {
  const [cart, setCart] = useState([])

  function addToCart(book) {
    setCart([...cart, book])
  }

  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <Router>
      <div className="App">
        <Nav cart={cart}/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/books" element={<Books books={books}/>}/>
          <Route path="/books/:id" element={<BookInfo books={books} addToCart={addToCart}/>}/> 
          <Route path="/cart" element={<Cart books={books} />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
