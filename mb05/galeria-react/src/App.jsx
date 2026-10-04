
import './App.css'
import Gallery from './components/Gallery'
import CategoryBar from './components/CategoryBar'
import Navbar from './components/Navbar'
import AddPhotoModal from './components/AddPhotoModal'
import FiltersOffCanvas from './components/FiltersOffCanvas'
import ImageCounter from './components/ImageCounter'
import Footer from './components/Footer'
import { useState } from 'react'
import photos from "./data/photos.json";

function App() {
  const [activeCategory, setActiveCategory] = useState('wszystkie');
  const [basePhotos, setBasePhotos] = useState(photos);

  const visible = activeCategory == "wszystkie" ? basePhotos : basePhotos.filter(item => 
    item.category == activeCategory
  )

  function changeCategory(category) {
    setActiveCategory(category);
  }

  function deleteImage(id) {
    setBasePhotos(basePhotos.filter(item => item.id != id))
    console.log(basePhotos)
  }

  function onAdd(image) {
    const newId = Math.max(...photos.map(i => i.id)) + 1
    setBasePhotos([...basePhotos, {...image, id: newId, favourite: false}])
  }

  function toggleFavourite(id) {
    setBasePhotos(basePhotos.map(i => i.id === id ? {...i, favourite: !i.favourite} : i))
  }

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
              data-bs-target="#addImage"
              type='button'>
                Dodaj zdjęcie
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="container mt-4 d-flex flex-column gap-2">
        <CategoryBar activeCategory={activeCategory} changeCategory={changeCategory} />
        <ImageCounter allPhotos={basePhotos?.length} visible={visible?.length} />
        <Gallery photos={visible} deleteFunction={deleteImage} favouriteFunction={toggleFavourite}/>
      </div>
      <AddPhotoModal onAdd={onAdd}/>
      <FiltersOffCanvas />
      <Footer />
   </div>
  )
}

export default App
