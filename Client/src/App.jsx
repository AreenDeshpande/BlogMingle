/* eslint-disable no-unused-vars */
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from "./pages/Dashboard"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Home from "./pages/Home"
export default function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/about" element={<About/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<Signin/>}/>
    </Routes>
    </BrowserRouter>
  )
}
