import { useState, useRef } from 'react'
import zdjecia from './zdjecia'
import './App.css'

function App() {
  const [zwierzetaVisible, setZwierzetaVisible] = useState(true)
  const [autaVisible, setAutaVisible] = useState(true)
  const [kwiatyVisible, setKwiatyVisible] = useState(true)
  const [baseZdjecia, setBaseZdjecia] = useState(zdjecia)

  const url = useRef(null);
  const alt = useRef(null);
  const category = useRef(null);

  const visibleImages = baseZdjecia.filter((item) => (
    (item.category == 1 && kwiatyVisible) ||
    (item.category == 2 && zwierzetaVisible) ||
    (item.category == 3 && autaVisible)
  ))

  function incrementDownloads(id) {
    setBaseZdjecia([...baseZdjecia.map((item) => {
      return item.id == id ? {...item, downloads: item.downloads + 1} : item
    })])
  }

  function handleSubmit(e) {
    e.preventDefault();

    const urlData = url.current.value;
    const altData = alt.current.value;
    const categoryData = category.current.value;
    
    const newId = Math.max(...baseZdjecia.map(i => i.id)) + 1;
    setBaseZdjecia([...baseZdjecia, {
      id: newId,
      filename: urlData,
      alt: altData,
      category: Number(categoryData),
      downloads: 0
    }])

    e.target.reset()
  }

  return (
    <div className='container'>
      <h1>Kategorie zdjęć</h1>

      <div className='d-flex gap-2'>
        <div className='form-check form-switch'>
          <input defaultChecked={kwiatyVisible} onClick={() => {setKwiatyVisible(!kwiatyVisible)}} className='form-check-input' role='switch' type='checkbox' id="kategoria1" ></input>
          <label className='form-check-label' htmlFor='kategoria1'>Kwiaty</label> 
        </div>
        <div className='form-check form-switch'>
          <input defaultChecked={kwiatyVisible} onClick={() => {setZwierzetaVisible(!zwierzetaVisible)}} className='form-check-input' role='switch' type='checkbox' id="kategoria2" ></input>
          <label className='form-check-label' htmlFor='kategoria2'>Zwierzęta</label> 
        </div>
        <div className='form-check form-switch'>
          <input defaultChecked={kwiatyVisible} onClick={() => {setAutaVisible(!autaVisible)}} className='form-check-input' role='switch' type='checkbox' id="kategoria3" ></input>
          <label className='form-check-label' htmlFor='kategoria3'>Auta</label> 
        </div>
      </div>

      <div className='row g-3'>
        {visibleImages.map((item) => (
          <div className='col-12 col-md-4'>
            <div className='card h-100 p-2'>
              <img alt={item.alt} src={`${item.filename}`} className='img-fluid rounded-sm' />
              <h4>Pobrań: {item.downloads}</h4>
              <button style={{width: "125px"}} className='btn btn-primary' onClick={() => {incrementDownloads(item.id)}}>Pobierz</button>
            </div>
          </div>
        ))}
      </div>

      <div className='d-flex mt-4 p-4'>
        <form onSubmit={(e) => {}} className='d-flex flex-column gap-2'>
          <h3>Formularz dodawania nowego zdjęcia</h3>
          <input id="alt" ref={alt} style={{width: "250px"}} className='form-control' type="text" placeholder='Alt'/>
          <input id="url" ref={url} style={{width: "250px"}} className='form-control' type="text" placeholder='URL'/>
                    <label className='form-text' htmlFor='category'>Kategoria:</label>

          <select id="category" ref={category} style={{width: "250px"}} className='form-control'>
            <option value="1">Kwiaty</option>
            <option value="2">Zwierzęta</option>
            <option value="3">Auta</option>
          </select>

          <button style={{width: "125px"}} className='btn btn-secondary' onClick={(e) => {handleSubmit(e)}}>Dodaj zdjęcie</button>
        </form>
      </div>
    </div>
  )
}

export default App
