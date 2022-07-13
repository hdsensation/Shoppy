import React from 'react'
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Carty from './Pages/Carty'
import Store from './Pages/Store'

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Store/>}/>
      <Route path='/cart' element={<Carty/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
