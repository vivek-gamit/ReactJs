import React from 'react'
import { Bookmark } from 'lucide-react'

function card(props) {
    return (
        <div className='card'>

            <div className="top">
                <img src={props.logo} alt="" />
                <button>Save <Bookmark /></button>
            </div>

            <div className="center">
                <h3>{props.company} <span>{props.date}</span></h3>
                <h2>{props.role}</h2>
                <div className='tag'>
                    <h4>{props.type}</h4>
                    <h4>{props.level}</h4>
                </div>
            </div>

            <div className="bottom">
                <div>

                    <h3>{props.price}</h3>
                    <p>{props.location}</p>
                </div>

                <button>Apply Now</button>
            </div>

        </div>
    )
}

export default card
