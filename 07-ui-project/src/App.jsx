import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

function App() {

  const users = [
    {
     img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600',
     intro:'',
     color:'lightblue',
     tag:'Satisfied'},

    {
     img:'https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
     intro:'',
     color:'green',
     tag:'UnderServed'},

    {
     img:'https://plus.unsplash.com/premium_photo-1661665301409-612464b89691?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDQ3fHx3b3JraW5nJTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600',
     intro:'',
     color:'orange',
     tag:'Underbanked'},

     {
     img:'https://images.unsplash.com/photo-1752170080622-18196de87763?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
     intro:'',
     color:'lightpink',
     tag:'Satisfied'},
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App
