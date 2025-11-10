import React from 'react'

function RightCardContent(props) {
  return (

            <div className='absolute top-0 left-0 h-full p-8 flex flex-col justify-between'>
                <h2 className='bg-white rounded-full h-14 w-14 flex justify-center items-center text-2xl font-bold'>{props.id+1}</h2>
                <div>
                    <p className='text-shadow-3xs text-lg leading-relaxed text-white mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id reiciendis error tempore libero, iste architecto!</p>
                    <div className='flex justify-between'>
                        <button style ={{backgroundColor:props.color}} className='text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
                        <button  style ={{backgroundColor:props.color}} className='text-white font-medium px-3 py-2 rounded-full'><i class="ri-arrow-right-line"></i></button>
                    </div>
                </div>
            </div>
  )
}

export default RightCardContent
