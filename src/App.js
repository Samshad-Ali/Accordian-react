import React from 'react'
import './Styles/Main.scss'
import Accordian from './Components/Accordian';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <>
    <NavBar/>
    <Routes>
     <Route path='/' element={<Home/>} />   
     <Route path='/accordian' element={<Accordian/>} />   
    </Routes>
    </>
  )
}

export default App;