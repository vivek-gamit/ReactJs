import React from 'react'

function Navbar(props) {
        function changeTheme(){
            console.log('theme change');
            props.setTheme('Dark')  
            
        }

  return (

    <div>
      <button onClick={changeTheme}>Theme change</button>
    </div>
  )
}

export default Navbar
