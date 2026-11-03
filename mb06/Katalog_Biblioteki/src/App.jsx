import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.css"
import './App.css'

import { ksiazkiStartowe } from './ksiazki'

function App() {
  const [books, setBooks] = useState(ksiazkiStartowe)

  function toggleFavourite(id) {
    setBooks([...books.map((book) => {
      return book.id == id ? {...book, ulubiona: !book.ulubiona} : book
    })])
  }

  const [activeCategory, setActiveCategory] = useState("wszystkie")
  const categories = [...new Set(ksiazkiStartowe.map(k => k.gatunek))]
  const activeBooks = (activeCategory !== "wszystkie" ? books.filter(book => book.gatunek == activeCategory) : books);

  return (
    <div className='container mt-4'>
      <h1>Katalog biblioteki</h1>


      <div className='d-flex justify-content-center gap-2 mb-4'>
        <button onClick={() => {setActiveCategory("wszystkie")}} className={`btn btn-outline-primary ${activeCategory == "wszystkie" ? "active" : ""}`}>
          Wszystkie
        </button>
        {categories.map((category) => (
          <button onClick={() => {setActiveCategory(category)}} className={`btn btn-outline-primary ${activeCategory == category ? "active" : ""}`}>
            {category}
          </button>
        ))}
      </div>

      <div className='m-5'>
        <h2>Wyświetlono {activeBooks.length} z {books.length} książek</h2>
      </div>
      <div className='row g-3'>
        {activeBooks.map((book) => (
          <div key={"book" + book.id} className='col-12 col-md-12'>
            <div className={`card h-100 ${book.dostepna ? "border-success" : "border-danger"}`}>
              <div className='card-body'>
                <h5 className='card-title h5'>{book.tytul}</h5>
                <p>{book.autor}</p>
                <span className={`badge ${book.dostepna ? "text-bg-success" : "text-bg-danger"} `}>{book.dostepna ? "Dostępna" : "Niedostępna"}</span>
                <button className='btn btn-link' onClick={() => {toggleFavourite(book.id)}}>{book.ulubiona ? "★" : "☆"}</button>
              </div>
              </div>
          </div>
        ))}
      </div>
     
    </div>
  )
}

export default App
