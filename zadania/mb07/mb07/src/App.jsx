import { useState } from 'react'
import { useRef } from 'react';
import './App.css'

function App() {
  const clientName = useRef(null);
  const courseNumber = useRef(null);

  const [searchedCourse, setSearchedCourse] = useState("");
  const [ascedningSort, setAscendingSort] = useState(false);
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

  function toggleSorting() {
    setAscendingSort(!ascedningSort);
  }

  const visibleCourses = courses.filter(i => i.toLowerCase().includes(searchedCourse.toLowerCase()))
  .sort((a, b) => ascedningSort
    ? a.localeCompare(b) // a > b
    : b.localeCompare(a)) // b > a

  return (
    <div className='d-flex flex-column p-5 gap-2'>
      <h2>Liczba kursów: {courses.length}</h2>
      <input type='text' placeholder='Szukaj kursu...' onChange={(e) => {setSearchedCourse(e.target.value)}}></input>
      <button style={{width: "70px"}} onClick={() => toggleSorting()} className='btn btn-secondary'>{ascedningSort ? "Z-A" : "A-Z"}</button>
      <p>Znaleziono {visibleCourses.length} z {courses.length} kursów</p>
      <ol>
        {visibleCourses.map((course) => (
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
