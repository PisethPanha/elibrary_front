import React from "react"
import { HashRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./routes/Home"

import Navbar from "./components/Navbar"

import KhmerBook from "./routes/KhmerBook"
import ForiegnBook from "./routes/ForiegnBook"
import Aboute from "./routes/Aboute"
import Privacy from "./routes/Privacy"
import Footer from "./components/Footer"
import Contact from "./routes/Contact"
function App() {
  return (
    <>
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/khmer" element={<KhmerBook/>}/>
        <Route path="/foriegn" element={<ForiegnBook/>}/>
        <Route path="/about" element={<Aboute/>}/>
        <Route path="/privacy-policy" element={<Privacy/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
      </Router>
    </>
  )
}

export default App
