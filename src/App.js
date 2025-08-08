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
    setCart([...cart, { ...book, quantity: 1 }])
    console.log('addtocart function called')
  }

  function changeQuantity(book, quantity) {
    console.log(book, quantity)
    setCart(cart.map(item => {
      if (item.id === book.id) {
        return {
          ...item,
          quantity: +quantity,
        }
      }
    else {
      return item
    }
    }))
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
          <Route path="/cart" element={<Cart books={books} cart={cart} changeQuantity={changeQuantity}/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
