import React, { useState } from 'react'

function App() {
  const [num, setnum] = useState(0)

  function IncreseNum(){
    console.log('Incresing num')
    setnum(num+1)
  }
  function DecreseNum(){
    console.log('Decresing num')
    setnum(num-1)
  }
  function Jump5Num(){
    console.log('Changing Num By 5')
    setnum(num+5)
  }
  function Default(){
    console.log('Set Default Value 0')
    setnum(0)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={IncreseNum}>Increse +</button>
      <button onClick={DecreseNum}>Decrese -</button><br />
      <button onClick={Jump5Num}>Jump By 5</button>
      <button onClick={Default}>Default</button>
    </div>
  )
}

export default App
