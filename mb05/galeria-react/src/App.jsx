import { useState } from 'react'
import './App.css'
import Gallery from './components/Gallery'
import CategoryBar from './components/CategoryBar'
import Navbar from './components/Navbar'

function App() {
  return (
   <div>
    <Navbar />
      <div className="container mt-4">
        <CategoryBar />
        <Gallery />
      </div>
      
   </div>
  )
}

export default App
