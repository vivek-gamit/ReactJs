import axios from 'axios'
import React from 'react'
import { useState } from 'react'

function App() {

  const [data, setdata] = useState([])

  const fetchRendomUser = async () =>{
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      console.log(data)
    }
    catch(error){
      console.log(error)
    }
  }

  const fetchrendomuser = async () =>{
    try{
      const res = await axios.get('https://picsum.photos/v2/list')
      setdata(res.data)
      console.log(res.data)
    }
    catch(error){
      console.log(error)
    }
  }
  return (
    <div>
      <button onClick={fetchRendomUser}>click</button><br />
      <button onClick={fetchrendomuser}>get data</button>
      <div>
        {data.map(function(elem,idx){
          return <h3 key={idx}>hello {elem.author}, {idx}</h3>
        })} 
      </div>
    </div>
  )
}

export default App
