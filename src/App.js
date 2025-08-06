//import "./App.css"
import Nav from "./components/Nav.jsx"
import Footer from './components/Footer.jsx'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Books from './Pages/Books.jsx'
import { books } from "./data"
import BookInfo from './Pages/BookInfo.jsx'
import { Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/books" render={() => <Books books={books}/>}/>
        <Route path="/books/:id" render={() => <BookInfo books={books}/>}/> 
        <Footer />
      </div>
    </Router>
  );
}

export default App;
