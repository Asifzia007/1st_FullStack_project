import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [student, setStudent] = useState([])

  useEffect(()=>{
    axios.get("/api/student")
    .then((response)=>{
setStudent(response.data)
    })
    .catch((error)=>{
      console.log(error);
      
    })
  })

  return (
    <>
    <h1>student details</h1>
    <p>Student count {student.length}</p>
    <div style={{display:"flex"}}>
    {
      student.map((student)=> (
        <div key={student.rollNo} style={{marginLeft:"10px", border:"2px solid white", padding:"10px"}}>
          <p>Student Roll No : {student.rollNo}</p>
          <p>Student Name : {student.Name}</p>
          <p>Student Age : {student.age}</p>
        </div>
      ))
    }
    </div>
    </>
  )
}

export default App
