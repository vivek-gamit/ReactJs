import React from 'react'
import RightCard from './RightCard'


function RightContent(props) {
  return (
    <div id='right' className='p-3 h-full w-3/4 flex flex-nowrap gap-10 overflow-x-auto rounded-4xl'>
      {props.users.map(function(elem,idx){
        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} color={elem.color}/>
      })}
    </div>
  )
}

export default RightContent
