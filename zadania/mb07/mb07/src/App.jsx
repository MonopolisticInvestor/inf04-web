import { useState } from 'react'
import { useRef } from 'react';
import './App.css'

function App() {
  const clientName = useRef(null);
  const courseNumber = useRef(null);
  const [courses, setCourses] = useState(["Programowanie w C#", "Angular dla początkujących", "Kurs Django"])
  
  function handleSubmit(event) {
    event.preventDefault();
    console.log(clientName.current.value);
    let parsedCourseNumber = parseInt(courseNumber.current.value);

    if (courses[parsedCourseNumber - 1]) {
      console.log(courses[parsedCourseNumber - 1]);
    } else {
      console.log("Nieprawidłowy numer kursu");
    }
  }



  return (
    <div className='d-flex flex-column p-5'>
      <h2>Liczba kursów: {courses.length}</h2>
      <ol>
        {courses.map((course) => (
          <li key={`kurs-${course}`}>{course}</li>
        ))}
      </ol>

      <form onSubmit={handleSubmit} className='d-flex flex-column gap-2'>
        <label htmlFor='clientName'>Imię i nazwisko:</label>
        <input className='form-control' ref={clientName} id="clientName" type="text"></input>

        
        <label  htmlFor='courseNumber'>Numer kursu:</label>
        <input className='form-control' ref={courseNumber} id="courseNumber" type="number"></input>
        <button className='btn btn-primary' style={{width: "150px"}}>Zapisz do kursu</button>
      </form>
    </div>
  )
}

export default App
