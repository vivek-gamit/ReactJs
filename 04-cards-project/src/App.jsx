import React from 'react'
import { Bookmark } from 'lucide-react'

function App() {
  return (
    <div className='parent'>

      <div className='card'>

        <div className="top">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSuRzDbn-FOUmczn6SvN_MaszwmQDnDhqNRw&s" alt="" />
          <button>Save <Bookmark /></button>
        </div>

        <div className="center">
          <h3>Amazon <span>5 days ago</span></h3>
          <h2>Senior UI/UX Designer</h2>
          <div>
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>

        <div className="bottom">
          <div>

            <h3>$120/hr</h3>
            <p>Mubai,India</p>
          </div>

          <button>Apply Now</button>
        </div>

      </div>



    </div>
  )
}

export default App
