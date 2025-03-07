import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from './pages/About';
import Contact from "./pages/Contact";
import NavBarHome from './layout/NavBar';
import RentedBooks from './components/RentedBooks';
import BookList from "./components/BookList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <NavBarHome />
        <div className="container mt-5 pt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/books" element= {<BookList />} />
            <Route path="/rented" element= {<RentedBooks/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
