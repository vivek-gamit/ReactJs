import React, { useState } from 'react'


function App() {

  const [num, setnum] = useState(20)
  const [name, setname] = useState('Vivek')

  function ChangeNum(){
    setnum(30)
    setname('Asus')
  }
  return (
    <div>
      <h1>Value of num {num} <br />Hello user {name}</h1>
      <button onClick={ChangeNum}>Click</button>
    </div>
  )
}

export default App
