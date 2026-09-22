import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import Hello from './components/Hello'
import names from "./data/names.json"

function App() {
  console.log(names)
  return (
   <>
    <h1>Test</h1>
    {names.map((person) => (
      <Hello name={person.name} />
    ))}
    {/* <Hello name="Antoni" klasa="5P1T"/> */}
   </>
  )
}

export default App
