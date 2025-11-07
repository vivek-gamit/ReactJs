import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Vivek' age={21} img='https://images.unsplash.com/photo-1751097006268-ae4601fcb117?q=80&w=1518&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <Card user='Raj' age={23} img = 'https://plus.unsplash.com/premium_photo-1725597443913-41027ae706bc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600'/>
      <Card user='Smit' age={21} img='https://images.unsplash.com/photo-1759049219585-4feb729fb018?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600'/>
    </div>
  )
}

export default App