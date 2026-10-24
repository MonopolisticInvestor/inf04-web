
import { Routes, Route } from 'react-router-dom'
import './App.css'
import GaleriaPage from './pages/GaleriaPage'
import DodajPage from './pages/DodajPage'
import NotFoundPage from './pages/NotFoundPage'
import ZdjeciePage from './pages/ZdjeciePage'
import Layout from './components/Layout'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<GaleriaPage />} />
        <Route path="/dodaj" element={<DodajPage />} />
        <Route path="/zdjecie/:id" element={<ZdjeciePage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Route>      
    </Routes>
  )
}

export default App
