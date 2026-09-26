import { useState } from 'react'
import './App.css'
import Gallery from './components/Gallery'
import CategoryBar from './components/CategoryBar'
import Navbar from './components/Navbar'
import AddPhotoModal from './components/AddPhotoModal'
import FiltersOffCanvas from './components/FiltersOffCanvas'

function App() {
  return (
   <div>
    <Navbar />
      <header className='container py-4 py-lg-5'>
        <div className='row align-items-center g-3'>
          <div className='col-12 col-lg-8'>
            <h1>Galeria zdjęć</h1>
            <p className='lead text-body-secondary mb-0'>
            Zdjęcia z wypraw w góry, nad morze i po mieście.
              Wybierz kategorię,
              żeby zawęzić widok — albo powiększ zdjęcie, które Ci
              się spodoba.
            </p>
          </div>
          <div className='col-12 col-lg-4'>
            <div className='d-flex flex-wrap gap-2 justify-content-lg-end'>
              <button
              className='btn btn-outline-secondary'
              data-bs-toggle="offcanvas"
              data-bs-target="#filterPanel"
              type='button'>
                Filtry
              </button>
               <button
              className='btn btn-outline-secondary'
              data-bs-toggle="modal"
              data-bs-target="#dodajZdjecie"
              type='button'>
                Dodaj zdjęcie
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="container mt-4 d-flex flex-column gap-2">
        <CategoryBar />
        <Gallery />
      </div>
      <AddPhotoModal/>
      <FiltersOffCanvas />
   </div>
  )
}

export default App
