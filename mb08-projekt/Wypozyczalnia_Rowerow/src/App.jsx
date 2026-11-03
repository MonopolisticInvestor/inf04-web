import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.css"
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const [bikes, setBikes] = useState([])
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState("")
  
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/rowery.json").then(response => response.json())
    .then(data => {
      setIsLoading(false)
      setBikes(data)
    })
    .catch(error => {
      setError(error)
      setIsLoading(false)
    })
  }

  fetchData()
  }, [])

  function deleteItem(id) {
    const filteredItems = bikes.filter(item => item.id !== id)

    setBikes(filteredItems)
  }

  const visibleBikes = bikes.filter(bike => bike.model.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className='container'>
      <h1 className='mb-3'>Wypożyczalnia rowerów</h1>

      <div className='d-flex mb-3' style={{width: "250px"}}>
        <input placeholder='Wyszukaj' className='form-control' type='text' value={search} onChange={(e) => {setSearch(e.target.value)}}/>
      </div>
      {isLoading && (<div className='d-flex justify-content-center'>
          <div className='spinner-border'></div>
          <p>Ładowanie...</p>
      </div>)}

      {isLoading == false && error !== "" && (
        <div className='alert alert-danger'>
          {error}
        </div>
      )}

      {isLoading == false && error == "" && (
        <div>
        {bikes.length > 0 ? (
          <div className='row g-3'>
            {visibleBikes.length > 0 ? (visibleBikes.map((bike) => (
              <div className='col-12 col-md-4'>
                <div className={`card h-100 ${bike.dostepny ? "" : "opacity-50"}`}>
                  <div className='card-body'>
                    <h5 className='card-title h5'>{bike.model}</h5>
                    <span className='badge bg-secondary mb-4'>{bike.typ}</span>
                    <div className='d-flex gap-2'>
                    <button className='btn btn-danger' onClick={() => {deleteItem(bike.id)}}>Usuń</button>
                    </div>
                  </div>
                </div>
              </div>
            ))) : <div className='alert alert-secondary'>Brak wyników</div>}
          </div>
        ): <div className='alert alert-secondary'>Brak rowerów</div>}
        </div>
      )}
    </div>
  )
}

export default App
