import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [pets, setPets] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:300/api/pets')
      console.log(response.data)
      setPets(response.data)
    }
    fetchData()
  },[])

  return (
   <div>
    <h2>My Petshop ({pets.length})</h2>
    {pets.map((pet) => {
      return (
        <h3>{pet.name}</h3>
      )
    })}
   </div>
  )
}

export default App
