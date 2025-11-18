import React, { useState } from 'react'

function App() {
  const [num, setfirst] = useState({user:'Vivek',age:20})
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
  setAnimate(true);

  // remove animation after 500ms so it can play again
  setTimeout(() => setAnimate(false), 500);
};


  const ChangeNum = () => {
    const newdata = {...num,user:'rudra',age:21}

    setfirst(newdata)
  }
  return (
    <div id='BigDiv'>
      <h1>hello my name is {num.user} and my age is {num.age}</h1>
      <button onClickCapture={handleClick} className={animate ? "btn animate" : "btn"} onClick={ChangeNum}>Click</button>
    </div>
  )
}

export default App
