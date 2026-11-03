import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.css"
import { przepisyStartowe } from './przepisy'

function App() {
  const [recipes, setRecipes] = useState(przepisyStartowe)
  const [ascendingSort, setAscendingSort] = useState(true)
  const sorted = ascendingSort ? [...recipes].sort((a, b) => a.czas - b.czas) : [...recipes].sort((a, b) => b.czas - a.czas) 

  const [invalidInput, setInvalidInput] = useState(false)


  const [recipeName, setRecipeName] = useState("")
  const [recipeTime, setRecipeTime] = useState(1)

  function addItem(e) {
    e.preventDefault()

    if (recipeTime <= 0) {
      setInvalidInput(true)
    } else {
      setInvalidInput(false)
    }

    setRecipes([...recipes, {
      kategoria: "Inne",
      czas: recipeTime,
      nazwa: recipeName,
    }])
  }

  return (
    <div className='container mt-4 '>
      <h1>Przepisy kulinarne</h1>

      <div className='row g-3'>
        <div className='mb-3 d-flex gap-2 flex-column col-12 col-md-6'>
          <label htmlFor='recipeName'>Nazwa:</label>
          <input value={recipeName} onChange={(e) => {setRecipeName(e.target.value)}}
          id='recipeName' type='text' className='form-control'></input>

          <label htmlFor='time'>Czas przygotowania (min):</label>
          <input value={recipeTime} onChange={(e) => {setRecipeTime(e.target.value)}} id="time" type='number'
          className={`form-control ${invalidInput ? "is-invalid" : ""}`}></input>
          <div className={`invalid-feedback ${invalidInput ? "d-block" : ""} `}>Czas musi być liczbą dodatnią</div>
          <button className='btn btn-primary' onClick={(e) => {addItem(e)}}>Zapisz</button>
        </div>

        <div className='col-12 col-md-6'>
          <h3>Sortowanie:</h3>
          <button className='btn btn-outline-primary' onClick={() => {setAscendingSort(!ascendingSort)}}>Czas: {ascendingSort ? "rosnąco ▲" : "malejąco ▼"}</button>
        </div>
      </div>
      
      <div className='row g-3'>
        {sorted.map((recipe) => (
          <div className='col-12 col-md-4'>
            <div className='card h-100'>
              <div className='card-body'>
                <h5 className='card-title h5'>{recipe.nazwa}</h5>
                <span className='badge bg-success'>{recipe.kategoria}</span>
                <p>Czas przygotowania: {recipe.czas} min</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
