import React from 'react'

function App() {

  localStorage.setItem('mycat', 'Tom')
  localStorage.setItem('mycar', 'rampyari')
  localStorage.setItem('myhouse', 'Dreamhouse')
  const cat = localStorage.getItem('mycat')
  const car = localStorage.getItem('mycar')
  const house = localStorage.getItem('myhouse')
  console.log(cat)
  console.log(car)
  console.log(house)

  // localStorage.removeItem('mycat')
  // localStorage.clear()

  const user = {name:'vivek', age:20}
  localStorage.setItem('user', JSON.stringify(user))
  const data = JSON.parse(localStorage.getItem('user'))

  console.log(data.name)
  return (
    <div>
      APP
    </div>
  )
}

export default App
