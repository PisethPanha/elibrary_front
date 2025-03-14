import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./routes/Home"

import Navbar from "./components/Navbar"

import KhmerBook from "./routes/KhmerBook"
import ForiegnBook from "./routes/ForiegnBook"
import Aboute from "./routes/Aboute"
import Privacy from "./routes/Privacy"
import Footer from "./components/Footer"
import Contact from "./routes/Contact"
import Login from "./routes/Login"
function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/khmer" element={<KhmerBook/>}/>
        <Route path="/foriegn" element={<ForiegnBook/>}/>
        <Route path="/about" element={<Aboute/>}/>
        <Route path="/privacy-policy" element={<Privacy/>}/>
        <Route path="/upload" element={<Contact/>}/>
        <Route path="/your-book" element={<Login/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
