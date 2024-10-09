import React from 'react';
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import DashBoard from './pages/DashBoard'
import SignUp from './pages/Signup'
import Projects from './pages/Projects'
import {BrowserRouter , Routes ,Route} from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
      <Route path="/dashboard" element={<DashBoard/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}
