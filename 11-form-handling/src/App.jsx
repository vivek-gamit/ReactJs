import React from 'react'

function App() {

  const submithandler = (e) => {
    e.preventDefault()
    console.log("form submited")
  }
  return (
    <div>
      <form onSubmit={(e) => {
        submithandler(e)
      }}>
        <input type="text" placeholder='Enter your text' /><br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
