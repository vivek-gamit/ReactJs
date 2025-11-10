import React from 'react'
import RightCardContent from './RightCardContent'

function RightCard(props) {
    return (
        <div className='shrink-0 h-full overflow-hidden relative w-80 rounded-4xl'>
            <img className='h-full w-full object-cover' src={props.img} alt="" />

            <RightCardContent id={props.id} tag={props.tag} color={props.color}/>

        </div>

    )
}

export default RightCard
