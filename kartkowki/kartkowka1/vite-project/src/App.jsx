import './App.css'
import Pozycja from './Pozycja'
import { useRef } from 'react'

function App() {

  const muzea = [
    "Muzeum Narodowe",
    "Muzeum Powstania Warszawskiego",
    "Zamek Królewski",
    "Muzeum Lotnictwa",
    "Muzeum Auschwitz-Birkenau",
  ];

  const clientName = useRef(null);
  const positionI = useRef(null);

  function handleFormSubmit(e) {
    e.preventDefault();

    let clientNameValue = clientName.current.value;
    let positionIValue = positionI.current.value;

    console.log("Imię i nazwisko:", clientNameValue)

    if (muzea[positionIValue - 1]) {
      console.log(muzea[positionIValue - 1])
    } else {
      console.log("Nieprawidłowy numer muzeum")
    }
  }

  return (
    <div className='p-2'>
      <h1>Liczba muzeów: {muzea.length}</h1>
      <ol>
        {muzea.map((museum, index) => (
        <Pozycja key={index+"muzeum"} nazwa={museum} />
      ))}
      </ol>

      <form style={{width: "400px"}} className='d-flex flex-column gap-2' onSubmit={(e) => {handleFormSubmit(e)}}>
        <label htmlFor='clientName'>Imię i nazwisko:</label>
        <input id="clientName" type="text" ref={clientName} />
        <label htmlFor='positionI'>Numer muzeum:</label>
        <input id="positionI" type="number" ref={positionI} />
        <button style={{width: "250px"}} className='btn btn-primary' type='submit'>Zatwierdź wybór</button>
      </form>
    </div>
  )
}

export default App
