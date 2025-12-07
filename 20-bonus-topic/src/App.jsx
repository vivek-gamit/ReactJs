import React from 'react'
import { useState } from 'react'
import Navbar from '../../16- useEffect-Hook/src/Components/Navbar'

function App() {

  const [theme, setTheme] = useState("light")
  return (
    <div>
      <h1>Theme is {theme}</h1>
      <Navbar  theme = {theme} setTheme={setTheme} />
    </div>
  )
}

export default App
