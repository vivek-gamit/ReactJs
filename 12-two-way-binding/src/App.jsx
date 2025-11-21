import React, { useState } from 'react'

function App() {

  const [title, settitle] = useState('')

  const submithandler = (e) => {
    e.preventDefault()
    console.log("form submited",title)
    settitle('')
  }
  return (
    <div>
      <form onSubmit={(e) => {
        submithandler(e)
      }}>
        <input type="text" placeholder='Enter your text' 
        value={title}
        onChange={(e) => {
          settitle(e.target.value)
        }}/><br />
        <button>Submit</button>
        
      </form>
    </div>
  )
}

export default App
