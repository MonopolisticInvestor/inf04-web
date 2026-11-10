import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import {BrowserRouter, Route, Routes } from "react-router-dom"
import ListaElementow from './ListaElementow'
import NotFound from './NotFound'
import ElementPage from './ElementPage'
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListaElementow />}></Route>
        <Route path='/wydarzenie/:id' element={<ElementPage />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
